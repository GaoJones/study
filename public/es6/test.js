'use strict';
const sentences = [{ subject: 'C#', verb: 'is', object: 'great' },
{ subject: 'Python', verb: 'are', object: 'large' }];
function say ({ subject, verb, object }) {
  console.log('${subject} ${verb} ${object}')
}
for (let s of sentences) {
  say(s);
}