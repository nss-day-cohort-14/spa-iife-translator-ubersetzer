var Languages = (function(oldIFFE){

  var frenchLexicon = {
    "merry": "joyeux",
    "christmas": "Noël",
    "and": "et",
    "happy": "content",
    "new": "Nouveau",
    "year": "an"
  };


  oldIFFE.getFrenchLexicon = function() {
    return frenchLexicon;
  };


  oldIFFE.translateToFrench = function(originalText) {

    var textArray = originalText.split(" ");
    var translatedArray = [];
    var wordsNotTranslated = [];

    for (var i = 0; i < textArray.length; i++) {
      var currentWord = textArray[i];

      if (currentWord in frenchLexicon) {
        translatedArray.push(frenchLexicon[currentWord]);
      } else {
        wordsNotTranslated.push(currentWord);
      }


    }

    translatedString = translatedArray.join(" ");
    wordsNotTranslated = wordsNotTranslated.join(" ");

    var translatedResults = {
      "translated": translatedString,
      "notTranslated": wordsNotTranslated
    };

    return translatedResults;
  };


  return oldIFFE;

}(Languages || {}));

