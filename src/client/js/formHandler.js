function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('userText').value

    //validate input text
    console.log("attempting to run validateText script...");
    Client.validateText(formText)

//new section to get API Data
fetch('http://localhost:8080/getAPIdata', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: formText})
    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        let agrees = ""
        if (res.agreement == "AGREEMENT"){
            agrees = "Yes"
        } else {
            agrees = "No"
        };
        document.getElementById('agree').innerHTML = agrees;
        document.getElementById('conf').innerHTML = res.confidence;
        document.getElementById('irony').innerHTML = res.irony;
    })

// Object
// agreement: "AGREEMENT"
// confidence: "100"
// irony: "NONIRONIC"
// polarity: "NONE"
// subjectivity: "OBJECTIVE

}//bracket to close function
export { handleSubmit }
