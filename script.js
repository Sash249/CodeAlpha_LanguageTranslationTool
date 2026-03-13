async function translateText() {

let text = document.getElementById("inputText").value;
let source = document.getElementById("sourceLang").value;
let target = document.getElementById("targetLang").value;

let url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${source}|${target}`;

let response = await fetch(url);
let data = await response.json();

document.getElementById("outputText").innerText = data.responseData.translatedText;
}

function copyText(){
let text = document.getElementById("outputText").innerText;
navigator.clipboard.writeText(text);
alert("Copied to clipboard!");
}