// Get Elements on page

// Textarea
var userInput = document.getElementById("textInput");

// Select menu
var languageSelector = document.getElementById("languageSelect");

// Translate button
var translateButton = document.getElementById("translateButton");

// Translator output
var translatorOutput = document.getElementById("translatedLanguage");

var speakButton = document.getElementById("speak");


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

  } else if (languageToTranslate === "Spanish") {

    // Pass textToTranslate to translateToSpanish function and store in translatedData
    translatedData = Languages.translateToSpanish(textToTranslate);

  } else if (languageToTranslate === "French") {

    // Pass textToTranslate to translateToFrench function and store in translatedData
    translatedData = Languages.translateToFrench(textToTranslate);

  }

  outputToDOM(translatedData);

}

function outputToDOM(translatedData) {

  translatorOutput.innerHTML = `<div id="translatedText">${translatedData.translated}</div>`;

}

// Created function to have text turned to speech
function speakButtonPressed() {
  var textToSpeak = document.getElementById("translatedText").innerHTML;
  responsiveVoice.speak(textToSpeak);
}


// Event listeners

// Translate button pressed
translateButton.addEventListener("click", translatePressed);

// Speak button pressed
speakButton.addEventListener("click", speakButtonPressed);


