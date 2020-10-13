function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('userText').value;

//New section to send text to server
    const sendText = async(formText) =>{
        console.log("initializing sendText functions")
    }

//end of new section to send text to server

// postData function used to send data to server
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
  //end of postData function

}

sendText(formText);

export { handleSubmit }
