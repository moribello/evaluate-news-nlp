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
app.get('/getAPIdata', function (req, res) {
    apiKey.key = process.env.API_KEY;
    console.log(`Sending API key: ${apiKey.key}`);
    let fullURL = `https://api.meaningcloud.com/sentiment-2.1?key=${calledData.key}&of=json&txt=${formText}&model=general&lang=en`;
    const postRequest = fetch(fullURL, {method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
    },
      body: JSON.stringify(data),
  });
  try{
      const apiData = postRequest.json();
      res.send(apiData);
  }
  catch (error) {
      console.log('Error during POST: ', error); //signal error during POST attempt;
    }
})

//GET route
app.get('/all', function (req, res) {
    console.log("Get request received");
    res.send(projectData);
    console.log(projectData);
})
