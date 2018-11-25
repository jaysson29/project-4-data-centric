import os
from flask import Flask, render_template, redirect, request, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

app = Flask(__name__)

app.config["MONGO_DBNAME"] = 'task_manager'
app.config["MONGO_URI"] = 'mongodb://root:R00tUser@ds019498.mlab.com:19498/task_manager'

mongo = PyMongo(app)

@app.route('/')

@app.route('/get_tasks')
def get_tasks():
    _tasks = mongo.db.tasks.find()
    task_list = [task for task in _tasks]
    return render_template('tasks.html', tasks=task_list)

@app.route('/add_task')
def add_task():
    _categories = mongo.db.catergories.find()
    catergory_list = [catergory for catergory in _categories]
    return render_template('addtask.html', catergories=catergory_list)

@app.route('/insert_task', methods=['POST'])
def insert_task():
    tasks = mongo.db.tasks
    tasks.insert_one(request.form.to_dict())
    return redirect(url_for('get_tasks'))
    
@app.route('/edit_task/<task_id>')
def edit_task(task_id):
    the_task = mongo.db.tasks.find_one({"_id": ObjectId(task_id)})
    all_catergories = mongo.db.catergories.find()
    return render_template("edittask.html", task=the_task, catergories=all_catergories)

@app.route('/update_task/<task_id>', methods=["POST"])
def update_task(task_id):
    tasks = mongo.db.tasks
    tasks.update( {'_id': ObjectId(task_id)}, 
    {
        'task_name': request.form.get['task_name'],
        'catergory_name': request.form.get['catergory_name'],
        'task_description': request.form.get['task_description'],
        'due_date': request.form.get['due_date'],
        'is_urgent': request.form.get['is_urgent']
    })
    return redirect(url_for('get_tasks'))

@app.route('/delete_task/<task_id>')
def delete_task(task_id):
    mongo.db.tasks.remove({'_id': ObjectId(task_id)})
    return redirect(url_for('get_tasks'))

@app.route('/get_catergories')
def get_catergories():
    _catergories = mongo.db.catergories.find()
    catergory_list = [catergory for catergory in _catergories]
    return render_template('catergories.html', catergories=catergory_list)

@app.route('/delete_catergory/<catergory_id>')
def delete_catergory(catergory_id):
    mongo.db.catergories.remove({'_id': ObjectId(catergory_id)})
    return redirect(url_for('get_catergories'))

@app.route('/edit_catergory/<catergory_id>')
def edit_catergory(catergory_id):
    _catergory = mongo.db.catergories.find_one({'_id': ObjectId(catergory_id)})
    return render_template('editcatergory.html', catergory= _catergory)

@app.route('/update_catergory/<catergory_id>', methods=['POST'])
def update_catergory(catergory_id):
    _catergories = mongo.db.catergories
    _catergories.update({"_id": ObjectId(catergory_id)},{"catergory_name": request.form.get("catergory_name")})
    return redirect(url_for('get_catergories'))
    
@app.route('/insert_catergory', methods=["POST"])
def insert_catergory():
    catergories = mongo.db.catergories
    catergory_doc = {'catergory_name': request.form["catergory_name"]}
    catergories.insert_one(catergory_doc)
    return redirect(url_for('get_catergories'))
    
@app.route('/add_catergory')
def add_catergory():
    return render_template('addcatergory.html')

if __name__ == '__main__':
    app.run(host=os.environ.get('IP'), port=int(os.environ.get('PORT')),debug=True)