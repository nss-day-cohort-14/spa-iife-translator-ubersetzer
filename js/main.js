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
    // Set background image to relevant country
    document.body.style.backgroundImage = "url('../img/denmark.jpg')";
    // Set image to fill page
    document.body.style.backgroundSize = "cover";

  } else if (languageToTranslate === "Spanish") {

    // Pass textToTranslate to translateToSpanish function and store in translatedData
    translatedData = Languages.translateToSpanish(textToTranslate);
    // Set background image to relevant country
    document.body.style.backgroundImage = "url('../img/spain.jpg')";
    // Set image to fill page
    document.body.style.backgroundSize = "cover";

  } else if (languageToTranslate === "French") {

    // Pass textToTranslate to translateToFrench function and store in translatedData
    translatedData = Languages.translateToFrench(textToTranslate);
    // Set background image to relevant country
    document.body.style.backgroundImage = "url('../img/france.jpg')";
    // Set image to fill page
    document.body.style.backgroundSize = "cover";

  }

  // Call outputToDOM function and pass translatedData to print to page
  outputToDOM(translatedData);

}

function outputToDOM(translatedData) {

  translatorOutput.innerHTML = `<div id="translatedText">${translatedData.translated}</div>`;

}

// Created function to have text turned to speech
function speakButtonPressed() {
  // Get current text 
  var textToSpeak = document.getElementById("translatedText").innerHTML;

  // Get current language selected
  if (languageSelector.value === "French") {
    responsiveVoice.speak(textToSpeak, "French Female");
  } else if (languageSelector.value === "Spanish") {
    responsiveVoice.speak(textToSpeak, "Spanish Female");
  } else if (languageSelector.value === "Danish") {
    responsiveVoice.speak(textToSpeak, "Danish Female");
  }

}

function translateFromWeb() {

    // Take user input, split into array, join back into string seperated by + sign
    var textToTranslate = userInput.value.split(" ").join("+");

    // Set languageSelected to be current value of languageSelector select menu
    var languageSelected = languageSelector.value;
    // Create variable to store language country code, initially set to null
    var languageToTranslateTo = null;

    // Based on languageSelected, set languageToTranslateTo approripriatley
    if (languageSelected === "Danish") {

      // Set languageToTranslate to equal to danish language code
      languageToTranslateTo = "da";
      // Set background of page to picture of denmark
      document.body.style.backgroundImage = "url('../img/denmark.jpg')";
      // Have background image cover entire page
      document.body.style.backgroundSize = "cover";

    } else if (languageSelected === "Spanish") {

      // Set languageToTranslate to equal to spanish language code
      languageToTranslateTo = "es";
      // Set background of page to picture of spain
      document.body.style.backgroundImage = "url('../img/spain.jpg')";
      // Have background image cover entire page
      document.body.style.backgroundSize = "cover";

    } else if (languageSelected === "French") {

      // Set languageToTranslate to equal to french language code
      languageToTranslateTo = "fr";
      // Set background of page to picture of france
      document.body.style.backgroundImage = "url('../img/france.jpg')";
      // Have background image cover entire page
      document.body.style.backgroundSize = "cover";

    }

    // Build API queryString, using textToTranslate, and languageToTranslateTo
    var queryString = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160609T150101Z.6da8e3ee25967aa0.1b10dcaca38379560c9d05b4df682a0f5e7a4554&text=" + textToTranslate + "&lang=en-" + languageToTranslateTo;

    // Create XMLHttpRequest object, store in xmlhttp variable
    var xmlhttp = new XMLHttpRequest();

    // Check that everything came back ok
    xmlhttp.onreadystatechange = function() {

      // Make sure readyState is good and status is ok
      if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {

        // Parse response text into a JSON object and store in translatedObject
        var translatedObject = JSON.parse(xmlhttp.responseText);

        // Output translated text to translatorOutput div
        translatorOutput.innerHTML = `<div id="translatedText">${translatedObject.text}</div>`;

      }
    };
    // Open request using GET and built up queryString
    xmlhttp.open("GET", queryString);
    // Send request
    xmlhttp.send();

}

// Event listeners

// Translate button pressed
translateButton.addEventListener("click", translatePressed);

// Speak button pressed
speakButton.addEventListener("click", speakButtonPressed);

// Translate from web button pressed
translateFromWebButton.addEventListener("click", translateFromWeb);


