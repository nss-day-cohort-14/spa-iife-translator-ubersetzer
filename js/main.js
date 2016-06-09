// Get Elements on page

// Textarea
var userInput = document.getElementById("textInput");

// Select menu
var languageSelector = document.getElementById("languageSelect");

// Translate button
var translateButton = document.getElementById("translateButton");

// Translator output
var translatorOutput = document.getElementById("translatedLanguage");

// Translate from web button
var translateFromWebButton = document.getElementById("translateFromWeb");


function translatePressed() {



  // Get current value of userInput
  var textToTranslate = userInput.value;

  // Get current language selected
  var languageToTranslate = languageSelector.value;

  // Translated text
  var translatedData = null;

  // Call translation function based on language selected

  // If Danish is selected
  if (languageToTranslate === "Danish") {

    // Pass textToTranslate to translateToDanish function and store in translatedData
    translatedData = Languages.translateToDanish(textToTranslate);
    document.body.style.backgroundImage = "url('../img/denmark.jpg')";
    document.body.style.backgroundSize = "cover";
  
  } else if (languageToTranslate === "Spanish") {

    // Pass textToTranslate to translateToSpanish function and store in translatedData
    translatedData = Languages.translateToSpanish(textToTranslate);
    document.body.style.backgroundImage = "url('../img/spain.jpg')";
    document.body.style.backgroundSize = "cover";

  } else if (languageToTranslate === "French") {

    // Pass textToTranslate to translateToFrench function and store in translatedData
    translatedData = Languages.translateToFrench(textToTranslate);
    document.body.style.backgroundImage = "url('../img/france.jpg')";
    document.body.style.backgroundSize = "cover";

  }

  outputToDOM(translatedData);

}

function outputToDOM(translatedData) {

  translatorOutput.innerHTML = `<p class="translatedText">${translatedData.translated}</p>`;

}



function translateFromWeb() {

    var textToTranslate = userInput.value.split(" ").join("+");

    var languageSelected = languageSelector.value;
    var languageToTranslateTo = null;

    if (languageSelected === "Danish") {
      languageToTranslateTo = "da";
    } else if (languageSelected === "Spanish") {
      languageToTranslateTo = "es";
    } else if (languageSelected === "French") {
      languageToTranslateTo = "fr";
    }

    var queryString = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160609T150101Z.6da8e3ee25967aa0.1b10dcaca38379560c9d05b4df682a0f5e7a4554&text=" + textToTranslate + "&lang=en-" + languageToTranslateTo;

    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
      
      if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {

        var translatedObject = JSON.parse(xmlhttp.responseText);

        translatorOutput.innerHTML = `<p class="translatedText">${translatedObject.text}</p>`;

      }
    };
    xmlhttp.open("GET", queryString);
    xmlhttp.send();

}




// Event listeners

// Translate button pressed
translateButton.addEventListener("click", translatePressed);
translateFromWebButton.addEventListener("click", translateFromWeb);


