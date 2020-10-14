//Enable environment variables using dotenv
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const http = require("https")
dotenv.config();

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require express to run server and routes
const express = require('express') //include Express installation
const app = express() //create new instance of app
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
app.get('/getAPIdata/:formdata', function (req, res) {
    console.dir(req.params);
    let formText = req.query.formdata;
    apiKey.key = process.env.API_KEY;
    //console.log(`Sending API key: ${apiKey.key}`);
    let fullURL = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey.key}&of=json&txt=${req.params.formdata}&model=general&lang=en`;
    console.log(fullURL);

    getAPIData(fullURL);
    // http.get(fullURL, function(response){
    //      response.on('data', (d) =>{
    //
    //      })
    });
  //   const postRequest = fetch(fullURL, {method: 'POST',
  //       credentials: 'same-origin',
  //       headers: {
  //           'Content-Type': 'application/json',
  //   },
  //     body: JSON.stringify(data),
  // });
  // try{
  //     const apiData = postRequest().json();
  //     res.send(apiData);
  // }
  // catch (error) {
  //     console.log('Error during POST: ', error); //signal error during POST attempt;
  //   }

//*Look into this as the actual solution
    // fetch(fullURL).then((resp) => resp.json()).then(function(data){
    //     console.log(data);
    //     resp.json(data);


    // const myRequest = async() => {
    //     console.log("Starting myRequest...")
    // const apiRes = await fetch(fullURL);
    //     console.log(`Awaiting fetch from ${fullURL}`)
    //     console.log(apiRes.json())
    // const apiJson = await apiRes.json();
    //     console.log(`Retrieving JSON: ${apiJson}`)
    // res.send("This is a returned string");
    // }
    // myJson = myRequest();
    // console.log(myJson);
const getAPIData = async () => {
    const response = await fetch(fullURL)
    console.log(response);
    try {
      const newData = await response.json();
      return newData;
    } catch (error) {
      console.log("error", error); //deal with error
    }
 };


//GET route
app.get('/all', function (req, res) {
    console.log("Get request received");
    res.send(projectData);
    console.log(projectData);
})
