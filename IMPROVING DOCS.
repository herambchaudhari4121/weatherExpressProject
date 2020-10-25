# weatherExpressProject
Weather Web App Using NodeJs and Express Js 
 
# Build a Weather Website in 30 minutes with Node.js + Express + OpenWeather

## Pre-Project Setup
Here’s what you’ll need:
OpenWeatherMap.org account. It’s a quick 20 second signup — I walk through all the setup details here.
Node.js: Visit the official Node.js website to download and install Node if you haven’t already. Looking for a more in-depth tutorial on Node? Check out my Top Three Node.js courses.

## Project Setup
Before we begin, all the code for this project can be found in the GitHub Repo
Create an empty directory named weather-app.
Open up your console, navigate to our new directory and run npm init.
Fill out the required information to initialize our project.
Within our weather-app directory, create a file named server.js — this file will house the code for our application.
Now that we have all the puzzle pieces, we can start building!


## Creating our Server (with Express JS)
First thing we need to do is get our server up and running. We’re going to use Express to accomplish this. Express is a minimalist web framework for Node.js — Express makes it very easy to create and run a web server with Node.
To use express, install it in the console:

npm install --save express

Once installed, we’re going to copy the boilerplate Express starter app from the Express documentation:

const express = require('express')
const app = express()

app.get('/', function (req, res) {res.send('Hello World!')})

app.listen(3000, function () {console.log('Example app listening on port 3000!')})

Above is an example of the simplest application that we can create with Express. First we require the express package that was just installed. Then, we create an instance named app by invoking Express.
The app.get('/'... means we are specifically focusing on the root URL (/). If we visit the root URL, Express will respond with “Hello World!”.
The app.listen(... shows we are creating a server that is listening on port 3000 for connections.
We can test our server by running:

node server.js
// Example app listening on port 3000!

Now open your browser and visit: localhost:3000 and you should see Hello World!


Awesome! You’ve just created a server with Node.js and Express!

Setting up the index view
Instead of responding with text when someone visits our root route, we’d like to respond with an HTML file. For this, we’ll be using EJS (Embedded JavaScript). EJS is a templating language.
In order to use EJS in Express, we need to set up our template engine:
A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.
The short version is that EJS allows us to interact with variables and then dynamically create our HTML based on those variables! (This will make a lot more sense later in the tutorial)


First, we’ll install ejs in the terminal:

npm install ejs --save

We can then set up our template engine with this line of code (just below our require statements) in our server.js file:
 app.set('view engine', 'ejs')
 EJS is accessed by default in the views directory. So create a new folder named views in your directory. Within that views folder, add a file named index.ejs. Think of our index.ejs file as an HTML file for now.
Real quick, here’s what our file structure should look like thus far:
|-- weather-app
   |-- views
      |-- index.ejs
   |-- package.json
   |-- server.js
Awesome, here’s a boilerplate for our index.ejs file. 
I’m not going to go over this file as this is not an HTML tutorial, but it should be pretty straight forward as we’re not using any EJS just yet. 
The html is just a form with one input for a city, and one submit button:

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Test</title>
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="container">
      <fieldset>
        <form action="/" method="post">
          <input name="city" type="text" class="ghost-input" placeholder="Enter a City" required>
          <input type="submit" class="ghost-button" value="Get Weather">
        </form>
      </fieldset>
    </div>
  </body>
</html>


Once you have the above code copied into your index.ejs file, you’re almost done! The final thing we need to do is replace our app.get code:
app.get

('/', function (req, res) {
  // OLD CODE
  res.send('Hello World!')
})

Above is the old code where we send the text ‘Hello World!’ to the client. Instead, we want to send our index.ejs file:
app.get('/', function (req, res) {
  // NEW CODE
  res.render('index');
})
Instead of using res.send, we use res.render when working with a templating language. res.render will render our view, then send the equivalent HTML to the client.
At this point, wee can test again by running:
node server.js
// Example app listening on port 3000!
Now open your browser and visit: localhost:3000 and you should see our index.ejs file being displayed!

 https://miro.medium.com/max/613/1*5sHe9cHrvfBLDa5HGFXY8Q.png
 
 ## Adding a CSS File
Yours will look a little less ‘pretty’ than mine. That’s because I’m making use of a css file to style my HTML. Here’s how we get our CSS to work:
You’ll need to add a new folder to our project called public. Within that folder create a css folder, and finally create a file named style.css. Here’s your new file structure:
|-- weather-app
   |-- views
      |-- index.ejs
   |-- public
      |-- css
         |-- style.css
   |-- package.json
   |-- server.js
Express wont allow access to this file by default, so we need to expose it with the following line of code:
app.use(express.static('public'));
This code allows us to access all of the static files within the ‘public’ folder.
Finally, we need our CSS. Since this isn’t a CSS course, I’m not going to be going over the specifics, but if you’d like to use my CSS, you can copy it from here.
Setting up our POST Route
By now, your servver.js file should look like this:


const express = require('express');
const app = express()

app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index');
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


We have one get route, and then we create our server. However, for our application to work, we need a post route as well. If you look at our index.ejs file, you can see that our form is submitting a post request to the / route:
<form action="/" method="post">
Now that we know where our form is posting, we can set up the route! A post request looks just like a get request, with one minor change:
app.post('/', function (req, res) {
  res.render('index');
})
But instead of just responding with the same html template, lets access the name of the city the user typed in as well. For this we need to use an Express Middleware.
Express is a minimalist framework. However, we can make use of Middleware (functions that have access to the req and res bodies) in order to preform more advanced tasks.
We’re going to make use of the body-parser middleware. body-parser allows us to make use of the key-value pairs stored on the req-body object. In this case, we’ll be able to access the city name the user typed in on the client side.
To use body-parser, we must install it first:
npm install body-parser --save
Once installed, we can require it, and then make use of our middleware with the following line of code in our server.js
const bodyParser = require('body-parser');
// ...
// ...
app.use(bodyParser.urlencoded({ extended: true }));
For the scope of this project, it’s not necessary you understand exactly how that line of code works. Just know that by using body-parser we can make use of the req.body object.
Finally, we can now update our post request to log the value of ‘city’ to the console.
app.post('/', function (req, res) {
  res.render('index');
  console.log(req.body.city);
})
Lets test it!
node server.js
// Example app listening on port 3000!
Now open your browser and visit: localhost:3000, type a city name into the field and hit enter!
If you go back to your command prompt, you should see the city name displayed in the prompt! Awesome, you’ve now successfully passed data from the client to the server!
If you can’t get it to work, here’s what your server.js file should look like now:

const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index');
})
app.post('/', function (req, res) {
  console.log(req.body.city);
  res.render('index');  
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

## Finishing app.post
To finish up this project, you’ll need the code from my previous tutorial: Build a simple Weather App with Node.js in just 16 lines of code. I’ve copied in the code below. If you don’t understand what the code is doing, I recommend you go read through my previous tutorial.
What were going to do is make a request to the OpenWeatherMap API in our app.post request. Here’s what the code looks like:


const request = require('request');
const apiKey = '*****************';
//...
//...
app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})


Woah. That’s a lot of new code. Lets break it all down:
1. Setting up our URL:
The first thing we do when we receive the post request is grab the city off of req.body. Then we create a url string that we’ll use to access the OpenWeatherMap API with
app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
2. Make our API call:
Now that we have our URL, we can make our API call. When we receive our callback, the first thing we’re going to do is check for an error. If we have an error, we’re going to render our index page. But notice that I’ve also added in a second argument. res.render has an optional second argument — an object where we can specify properties to be handled by our view ( index.ejs ).
In this instance, I’ve added an error string:
request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
3. Display the weather:
Now that we know we have no API error, we can parse our JSON into a usable JavaScript object.
The first thing we’ll do is check to see if weather.main == undefined . The only reason why this would be undefined, is if our user input a string that isn’t a city (‘3’, ‘afefaefefe’, etc.). In this instance, we’ll render the index view, and we’ll also pass back an error.
If weather.main != undefined, then we can finally send back the weather to the client! We’ll create a string that clarifies what the weather is, and send that back with the index view.
} else {
  let weather = JSON.parse(body)
  if(weather.main == undefined){
    res.render('index', {weather: null, error: 'Error, please try again'});
  } else {
    let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    res.render('index', {weather: weatherText, error: null});
  }
}
Using EJS
There’s only one thing left to do at this point… Make use of all those variables we sent back with our res.render call. These variables aren’t available on the client, this is where we finally get to use EJS. There are three possible scenarios that we have in our code:
{weather: null, error: null}
{weather: null, error: ‘Error, please try again’}
{weather: weatherText, error: null}
We need to make two simple changes to our index.ejs to handle these three scenarios. Here’s the code, then I’ll walk you through it:
<% if(weather !== null){ %>
  <p><%= weather %></p>
<% } %>
<% if(error !== null){ %>
  <p><%= error %></p>
<% } %>
It helps to remember that EJS stands for Embedded JavaScript. With that in mind, EJS has opening and closing brackets: <% CODE HERE %> Anything between the brackets is executed. If the opening bracket also includes an equal sign: <%= CODE HERE ADDS HTML %>, then that code will add HTML to the result.
If you look at our EJS that we’ve added, we’re testing to see if either of our weather, or error variables are null. If they’re both null, nothing happens. However, if one isn’t null (i.e. it has a value), then we will add a paragraph to the screen with the value of the respective variable.
index.ejs
Here’s what your index.ejs should look like:

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Test</title>
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="container">
      <fieldset>
        <form action="/" method="post">
          <input name="city" type="text" class="ghost-input" placeholder="Enter a City" required>
          <input type="submit" class="ghost-button" value="Get Weather">
        </form>
        <% if(weather !== null){ %>
          <p><%= weather %></p>
        <% } %>

        <% if(error !== null){ %>
          <p><%= error %></p>
        <% } %>
      </fieldset>
    </div>
  </body>
</html>


server.js
Here’s what your server.js should look like:

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = '*****************';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

Run your code
Reminder: all of the code for this project can be found in the GitHub Repo
node server.js
// Example app listening on port 3000!
Now open your browser and visit: localhost:3000, type a city name into the field and hit enter! You should see the weather appear on your screen!

## https://miro.medium.com/max/480/1*_7ZH7xnOUoFk-WlkxwvgdQ.gif

You just built a website that makes API calls and responds to the client in real time!



