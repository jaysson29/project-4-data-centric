# Project 4 : Data Centric </h1>

### The Gaming Recipe Styled Website
[![Python](https://img.shields.io/badge/python-2.7_3.3-blue.svg)]()
[![Requirements Status](https://requires.io/github/jaysson29/project-4-data-centric/requirements.svg?branch=master)](https://requires.io/github/jaysson29/project-4-data-centric/requirements/?branch=master)

### Preview

![Full Width Pics Preview](https://github.com/jaysson29/project-4-data-centric/blob/master/snapshot.jpg?raw=true)

#### **Live Preview** : **[The Game Space --- Heroku](https://project-4-data-centric-jason.herokuapp.com/)**

## What is this website for?
```
This is a website for my full stack web development course as a project, 
this project is based on only three languages HTML, CSS AND JavaScript.

This Website Targets Gamers And Information Goers.
The Website Allows The User To Display Their Favorite Game On A Site That Showcases 
Games.

The Styling Consists Of A Gaming Style UI And A User-Friendly Design
```
## What does it do?
```
I Created This Website For My Project 4 Assignment In Website Development

The Purpose Of The Project Is To Create A Website That Would Display Cooking Recipes
But With My Own Style Attached.

I Decided To Go With The Gaming Recipe Approach That Would Display All the 
Ingredients Of A Game Showing The Platform, Description, Trailer, Date Released,
If the Game Is CO-OP And How Many Players
```

### Features
- Add A Game To Database
- Edit A Game In The Database
- Delete A Game In The Database(With Admin Password)
- View A Game From The Database In A Showcase Design

#### Future Features
- Search Bar, Allowing The User To Search For Specific Game
- Login/Register A User

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. You Need A Python IDE Or Command Line To Run Locally.</p>

## Installing

Firstly Clone Or Download The Git repository.

```
git clone https://github.com/jaysson29/project-4-data-centric.git
```

Secondly Install Requirements

```
pip install -r requirements.txt (Python 2)
pip3 install -r requirements.txt (Python 3)
```

Finally Run
```
python app.py

or 

python app.py runserver $IP:$PORT

```
Navigate To http://localhost:7000 In Your Browser To View Website

The Project Will Be Ready For Deployment

# Deployment

I Suggest Using Heroku To Deploy The Project

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://dashboard.heroku.com/new-app)

Once The Heroku Enivorment Is Set Up, 
You Will Need To Link The Git Repository To The Heroku App.

When This Is Complete Got To The Settings Page Of The Heroku App And Add These **Config Vars**:
```
IP : 0.0.0.0

PORT : 5000

MONGO_URI : mongodb://root:R00tUser@ds061196.mlab.com:61196/my-test-db

```
Finally Go To The Deploy Tab And Scroll Down And Select **Enable Automatic Deploys** 
Or Click Manally Deploy Master Branch



### Running the tests

Manual And Automatic Testing

#### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```
#### And coding style tests

Explain what these tests test and why

```
Give an example
```
### Tech Used

### Some the tech used includes:
- **HTML**, **CSS**, **Javascript** and **Python**
  - Base languages used to create this website
- [Materialize](http://archives.materializecss.com/0.100.2/)
    - I used **Materlialize** 0.100.2 to give my project a simple, responsive layout
- [JQuery](https://jquery.com)
    - I used **JQuery** for boostrap
- [Python](https://www.python.org/)
    - I used **Python** for functionality
    - I used **Flask** for more python functionality
    - I used **PYMongo** for asscess to mongodb
- [MongoDB](https://www.mongodb.com/)
    - I used **MongoDB** to store and receive data on a database


# Credits

## Author

* **Jason Bishop** - *Initial work* - [Jaysson29 - Github](https://github.com/jaysson29)

### Media
- The photos used in this site were obtained from [google](https://google.com) and edited by me.
- The video used on this site belongs to Youtube [youtube](https://www.youtube.com/)

### Information
- The information i used to create this site was from a number of sources
    - Researched information from [Google](http://google.com)
    - Researched information from [Wikipedia](https://www.wikipedia.org/)

## Acknowledgments

* Stackoverflow
* Google
* Code Institute ( For The Marker The Admin Password Is *Jayssonmaster29*)