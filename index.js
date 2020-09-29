function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

<<<<<<< HEAD
 var facts = ["He was the last Beatle to learn to drive","He was never a vegetarian","He was a choir boy and boy scout","He hated the sound of his own voice"];
  
 function johnLennonFacts(facts) {
   const arr=[];
   let i = 0;
   while(facts.length > i){
  arr.push(`${facts[i]}!!!`)
  i++
  }
  return arr
  }
  
johnLennonFacts(facts);
=======
function johnLennonFacts() {
  var facts = ['While on tour, he enjoyed playing Monopoly', 'Harmonica was the first instrument Lennon learned to play'];
  var array = [];
  var i = 0;
  while (array.length < facts.length) {
    array.push(facts[i] + "!!!");
    i++;
  }
  return array;
}
>>>>>>> 5b50bb6169e96c9418b84f59c890563549866bf7

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number += 1
  } while (number < 15);
  return array;
}