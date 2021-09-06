var btnTranslator = document.querySelector("#btn");
var input = document.querySelector("#input-text")
var output = document.querySelector("#output-txt")

var url = "https://api.funtranslations.com/translate/valyrian.json"

function getTranslationurl(text){
    return url + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error Occured" + error);
    alert("Some error occured, Please try again after some time")
}

function clickEventHandler(){
    var inputTxt = input.value
    fetch (getTranslationurl(inputTxt)).then(response => response.json()).then(json => {
        var outputValue = json.contents.translated
        output.innerText = outputValue
    })
    .catch(errorHandler)
}

btnTranslator.addEventListener("click", clickEventHandler)