//Enable environment variables using dotenv
const dotenv = require('dotenv');
dotenv.config();

// Setup empty JS objects to act as endpoints for all routes
let projectData = {};
let apiKey = {};

// Set up values for URL, etc.
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key='
const model = 'general' //Note - if you want to get fancy you can try and change this in the DOM. For now, leave it as is.
const lang = 'en' //Same as with model - leave the language for now.

// Require express to run server and routes
const express = require('express') //include Express installation
const app = express() //create new instance of app

app.use(express.static('dist')) //set up distribution folder

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/getAPIdata', function (formText) {
    //retrieve API key
    apiKey.key = process.env.API_KEY;
    console.log("API key retrieved!")
    console.log(formText);
    let fullURL = `${baseURL}${apiKey.key}&of=json&txt=${formText}&model=${model}&lang=${lang}`;
    console.log(fullURL);
    //Get 'fullText' value from formHandler.js
    //Combine API key, 'fullText', and the rest of the url
    //Make URL call
    //Handle JSON file
})

//GET route
app.get('/all', function (req, res) {
    console.log("Get request received");
    res.send(projectData);
    console.log(projectData);
})
