var Languages = (function(oldIFFE){

  var danishLexicon = {
    "merry": "god",
    "christmas": "jul",
    "and": "uber",
    "happy": "",
    "new": "",
    "year": ""
  };


  oldIFFE.getDanishLexicon = function() {
    return danishLexicon;
  };


  oldIFFE.translateToDanish = function(originalText) {

    var textArray = originalText.split(" ");
    var translatedArray = [];
    var wordsNotTranslated = [];

    for (var i = 0; i < textArray.length; i++) {
      var currentWord = textArray[i];

      if (currentWord in danishLexicon) {
        translatedArray.push(danishLexicon[currentWord]);
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

})(Languages);

