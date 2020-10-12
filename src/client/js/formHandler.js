function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('userText').value
    // Client.checkForName(formText)

//new section to get API Key
const getAPIKey = async() =>{
    const request = await fetch('/test')
    try{
        const calledData = await request.json();
        console.log(`API key = ${calledData.key}`);
        let fullURL = `https://api.meaningcloud.com/sentiment-2.1?key=${calledData.key}&of=json&txt=${formText}&model=general&lang=en`;
        console.log(fullURL);
    }
    catch(error){
        console.log(error);
    }
}
console.log("Attempting to fetch API key...")
getAPIKey();


//end of new section to get API key



// update UI - commented out for now
          // .then(function () {
          //   updateUI()
          // })

// Async postData function called during button click event
const postData = async (url = '', data = {}) => {
    const postRequest = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
    },
      body: JSON.stringify(data),
    });
    try {
      const newData = await postRequest.json();
      return newData;
    }
    catch (error) {
      console.log('Error during POST: ', error); //signal error during POST attempt;
    }
  }
}
export { handleSubmit }
