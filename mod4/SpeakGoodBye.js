( function(window){
var helloSpeaker ={};
var speakWord = "Good Bye";
 helloSpeaker.speak=function(name) {
  console.log(speakWord + " " + name);
}
window.helloSpeaker=helloSpeaker;
})(window);
