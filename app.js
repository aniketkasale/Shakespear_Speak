var btnTranslate=document.querySelector("#translate");
var input=document.querySelector("#text-input");
var output=document.querySelector("#output");
var url="https://api.funtranslations.com/translate/shakespeare.json"
function getTranslationUrl(text){
    return url + "?" + "text=" + text
}
function errorHandler(){
    alert("There is Server Error")
}
btnTranslate.addEventListener("click",clickHandler);
function clickHandler(){
    var inputText=input.value;
    fetch(getTranslationUrl(input.value))
    .then(response=>response.json())
    .then(json=>{
        var traslateText=json.contents.translated;
        output.innerText=traslateText;
    })
    .catch(errorHandler)

};