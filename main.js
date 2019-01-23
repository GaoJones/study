$(document).ready(function () {
  'user strict';
  let arr = ["I", "love", "JavaScript"];
  console.log(getSentence(arr));

});

function getGreeting () {
  return "Hello,World";
}
function getSentence ({ subject, verb, object }) {
  return '${subject} ${verb} ${object}';
}