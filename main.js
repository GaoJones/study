$(document).ready(function () {
  'user strict';

  const arrr = [1, 2, 3, 4];
  arrr.copyWithin(0, -3, -2);


  for (const iterator of arrr) {
    console.log(iterator);
  }

  // for (let key in per) {
  //   console.log("per[" + key + "]=" + per[key]);
  // }

});

function getGreeting (o) {
  o.message = "set in f";
  o = { message: "new object!" };
  console.log(o.message);
}

function update (birthYear, occupation) {
  birthYear = birthYear;
  occupation = occupation;
}