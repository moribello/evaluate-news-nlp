function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('userText').value

//new section to get API Key
const getAPIData = async() =>{
    const request = await fetch(`/getAPIdata/${formText}`)
    console.log("awaiting data...")
    try{
        const calledData = request.json();
        console.log(`API data = ${calledData}`);
    }
    catch(error){
        console.log(error);
    }
}
console.log("Attempting to fetch API key...")
getAPIData();


//end of new section to get API key



// update UI - commented out for now
          // .then(function () {
          //   updateUI()
          // })

// Async postData function called during button click event
// const postData = async (url = '', data = {}) => {
//     const postRequest = await fetch(url, {
//         method: 'POST',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json',
//     },
//       body: JSON.stringify(data),
//     });
//     try {
//       const newData = await postRequest.json();
//       return newData;
//     }
//     catch (error) {
//       console.log('Error during POST: ', error); //signal error during POST attempt;
  //   }
  // }
}
export { handleSubmit }
