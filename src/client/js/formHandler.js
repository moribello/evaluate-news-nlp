function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('userText').value
    // Client.checkForName(formText)

    let subURL = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&of=json&txt=${formText}&model=general&lang=en`;
//get API Data using getAPIData function
    getAPIData(subURL)
      .then(function (APItemp) {
        postData('http://localhost:8080/analyze')

// update UI - commented out for now
          // .then(function () {
          //   updateUI()
          // })
      })
  }
//get API DATA function called above
const getAPIData = async (subURL) => {
    const response = await fetch(subURL)
    console.log(subURL);
    console.log(response);
    try {
      const newData = await response.json();
      return newData;
    } catch (error) {
      console.log("error", error); //deal with error
    }
};

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

export { handleSubmit }
