import os
from flask import Flask, render_template, redirect, request, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

app = Flask(__name__)

app.config["MONGO_DBNAME"] = 'my-test-db'
app.config["MONGO_URI"] = 'mongodb://root:R00tUser@ds061196.mlab.com:61196/my-test-db'

mongo = PyMongo(app)

@app.route('/')

@app.route('/main')
def main():
    _games = mongo.db.games.find()
    _new =  mongo.db.games.find({"recently_added": "on"})
    _rating = mongo.db.games.find()
    _players = mongo.db.games.find()
    _coop = mongo.db.games.find({"game_coop": "on"})
    _genres = mongo.db.genres.find()
    _reviews = mongo.db.reviews.find()
    _ads = mongo.db.ads.find()
    _platforms = mongo.db.platforms.find()
    
    _ps4 = mongo.db.games.find({"game_platform": "PlayStation-4"})
    _linux = mongo.db.games.find({"game_platform": "Linux"})
    _mac = mongo.db.games.find({"game_platform": "Mac"})
    _xbone = mongo.db.games.find({"game_platform": "Xbox-One"})
    _x360 = mongo.db.games.find({"game_platform": "Xbox-360"})
    _ps3 = mongo.db.games.find({"game_platform": "Playstation-3"})
    _pc = mongo.db.games.find({"game_platform": "PC"})
    _ninswitch = mongo.db.games.find({"game_platform": "Nintendo-Switch"})
    
    game_list = [game for game in _games]
    platform_list = [platform for platform in _platforms]
    
    ps4_list = [game for game in _ps4]
    linux_list = [game for game in _linux]
    mac_list = [game for game in _mac]
    xbone_list = [game for game in _xbone]
    x360_list = [game for game in _x360]
    ps3_list = [game for game in _ps3]
    pc_list = [game for game in _pc]
    ninswitch_list = [game for game in _ninswitch]
    
    new_list = [game for game in _new]
    rating_list = [game for game in _rating]
    player_list = [game for game in _players]
    coop_list = [game for game in _coop]
    genre_list = [genre for genre in _genres]
    reviews_list = [review for review in _reviews]
    ads_list = [ad for ad in _ads]
    
    return render_template(
        'main.html', 
        games=game_list,
        platforms=platform_list,
        new=new_list, 
        rating=rating_list, 
        players=player_list, 
        coop=coop_list,
        ads=ads_list,
        reviews=reviews_list,
        
        ps4=ps4_list,
        linux=linux_list,
        mac=mac_list,
        xbone=xbone_list,
        x360=x360_list,
        ps3=ps3_list,
        pc=pc_list,
        ninswitch=ninswitch_list,
         
        current="main", 
        main="#main", 
        gamelink="#games", 
        about="#about", 
        contact="#contact"
    )
    
@app.route('/get_games')
def get_games():
    _games = mongo.db.games.find()
    game_list = [game for game in _games]
    return render_template('games.html', games=game_list, current="game", main="/main", gamelink="/main#games", about="/main#about", contact="/main#contact")

@app.route('/add_game')
def add_game():
    _platforms = mongo.db.platforms.find()
    platform_list = [platform for platform in _platforms]
    return render_template('addgame.html', plaforms=platform_list, current="game",main="/main", gamelink="/main#games", about="/main#about", contact="/main#contact")

@app.route('/insert_game', methods=['POST'])
def insert_game():
    games = mongo.db.games
    games.insert_one(request.form.to_dict())
    return redirect(url_for('get_games'))
    
@app.route('/edit_game/<game_id>')
def edit_game(game_id):
    the_game = mongo.db.games.find_one({"_id": ObjectId(game_id)})
    all_platforms = mongo.db.platforms.find()
    return render_template("editgame.html", game=the_game, platforms=all_platforms, main="/main", gamelink="/main#games", current="edit", about="/main#about", contact="/main#contact")

@app.route('/update_game/<game_id>', methods=["POST"])
def update_game(game_id):
    games = mongo.db.games
    games.update({"_id": ObjectId(game_id)},
        {
            "game_platform": request.form['game_platform'],
            "game_name":  request.form['game_name'],
            "game_info": request.form['game_info'],
            "game_img": request.form['game_img'],
            "game_rating": request.form['game_rating'],
            "game_trailer": request.form['game_trailer'],
            "game_developer": request.form['game_developer'],
            "game_date": request.form['game_date'],
            "game_players": request.form['game_players'],
            "game_coop": request.form.get('game_coop'),
            "recently_added": request.form.get('recently_added')
        })
    return redirect(url_for('get_games'))
    
@app.route('/get_reviews/<game_id>')
def get_reviews(game_id):
    _reviews = mongo.db.reviews.find()
    the_game = mongo.db.games.find_one({"_id": ObjectId(game_id)})
    reviews = _reviews
    
    return render_template("reviews.html", game=the_game, reviews=reviews, main="/main", gamelink="/main#games", current="edit", about="/main#about", contact="/main#contact")

@app.route('/delete_game/<game_id>')
def delete_game(game_id):
    mongo.db.games.remove({'_id': ObjectId(game_id)})
    return redirect(url_for('get_games'))

@app.route('/get_platforms')
def get_platforms():
    _platforms = mongo.db.platforms.find()
    platform_list = [platform for platform in _platforms]
    return render_template('platforms.html', platforms=platform_list, current="plat", main="/main", gamelink="/main#games", about="/main#about", contact="/main#contact")
    
@app.route('/delete_platform/<platform_id>')
def delete_platform(platform_id):
    mongo.db.platforms.remove({'_id': ObjectId(platform_id)})
    return redirect(url_for('get_platforms'))

@app.route('/edit_platform/<platform_id>')
def edit_platform(platform_id):
    _platform = mongo.db.platforms.find_one({'_id': ObjectId(platform_id)})
    return render_template('editplatform.html', current="plat-edit", platform=_platform,main="/main", gamelink="/main#games", about="/main#about", contact="/main#contact")

@app.route('/update_platform/<platform_id>', methods=['POST'])
def update_platform(platform_id):
    _platforms = mongo.db.platforms
    _platforms.update({"_id": ObjectId(platform_id)},{"game_platform": request.form.get("game_platform")})
    return redirect(url_for('get_platforms'))
    
@app.route('/insert_platform', methods=["POST"])
def insert_platform():
    platforms = mongo.db.platforms
    platforms_doc = {'game_platform': request.form["game_platform"]}
    platforms.insert_one(platforms_doc)
    return redirect(url_for('get_platforms'))
    
@app.route('/add_platform')
def add_platform():
    return render_template('addplatform.html',current="plat-add", main="/main", gamelink="/main#games", about="/main#about", contact="/main#contact")

if __name__ == '__main__':
    app.run(host=os.environ.get('IP'), port=int(os.environ.get('PORT')),debug=True)