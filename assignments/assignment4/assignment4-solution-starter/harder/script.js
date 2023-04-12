const SpeakGoodBye = require('./SpeakGoodBye');
const SpeakHello = require('./SpeakHello');

(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for(name in names) {
    const firstLetter = name.slice(0,1).toLowerCase();
    if(firstLetter === 'j') {
      SpeakHello.speak(name);
    } else {
      SpeakGoodBye.speak(name);
    }
  }

})();




