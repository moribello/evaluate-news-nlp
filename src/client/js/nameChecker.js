function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
    else{
        let APIkey = "cdbb62a839e9a2011ce1b96497dda5af"
        alert(`https://api.meaningcloud.com/sentiment-2.1?key=${APIkey}&of=json&txt=${inputText}&model=general&lang=en`)
    }
}

export { checkForName }
