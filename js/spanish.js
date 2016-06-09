var Languages = (function(oldIFFE){

  var spanishLexicon = {
    "merry": "feliz",
    "christmas": "navidad",
    "and": "y",
    "happy": "feliz",
    "new": "año",
    "year": "nuevo"
  };


  oldIFFE.getSpanishLexicon = function() {
    return spanishLexicon;
  };


  oldIFFE.translateToSpanish = function(originalText) {

    var textArray = originalText.split(" ");
    var translatedArray = [];
    var wordsNotTranslated = [];

    for (var i = 0; i < textArray.length; i++) {
      var currentWord = textArray[i];

      if (currentWord in spanishLexicon) {
        translatedArray.push(spanishLexicon[currentWord]);
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
