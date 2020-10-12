//Enable environment variables using dotenv
const dotenv = require('dotenv');
dotenv.config();

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require express to run server and routes
const express = require('express') //include Express installation
const app = express() //create new instance of app

app.use(express.static('dist')) //set up distribution folder

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

let apiKey = {};
app.get('/test', function (req, res) {
    apiKey.key = process.env.API_KEY;
    console.log(`Sending API key: ${apiKey.key}`);
    res.send(apiKey);
})

//GET route
app.get('/all', function (req, res) {
    console.log("Get request received");
    res.send(projectData);
    console.log(projectData);
})

//POST route
app.post('/analyze', analyze);

function analyze(req, res){
    // projectData.text = req.sentence_list.text;
    res.end();
    console.log(projectData);
}
