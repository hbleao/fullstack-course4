(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for(let i = 0; i < names.length; i++) {
    const firstLetter = names[i].slice(0,1).toLowerCase();
    if(firstLetter === 'j') {
      helloSpeaker.speak(names[i]);
    } else {
      byeSpeaker.speak(names[i]);
    }
  }

})();
