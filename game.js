
var user = prompt('What is your name?');
console.log("users name=" + user);
alert('Happy weekend! ' + user + ', time for a cold beer!');
//
var correct = 0;
var a = prompt('Do I have any siblings? (yes or no repsonses)');
console.log("first prompt finished");
if (a === 'yes' || a === 'y' || a === 'Yes' || a === 'Y'){
  console.log("first response: " + a);
  alert('Yes! Correct ' + user + ' I have 1 sister');
  correct = correct + 1;
  console.log("correct = " + correct);
} else {
  console.log("frist response incorrect")
  alert('incorrect, sorry ' + user + ', I have 1 sister');
}
//
var b = prompt('Have I lived anywhere but Seattle?');
if (b === 'yes' ||  b ==='y' || b === 'Yes' || b === 'Y'){
  console.log("second response: " + b);
  alert('Correct ' + user + '! I lived in Pullman during college');
  correct = correct + 1;
  console.log("correct =" + correct);
} else {
  console.log("second response incorrect");
  alert('Sorry ' + user + ', I lived in Pullman for 2 years');
}
//
var c = prompt('Have I ever been to Austrailia?');
if (c === 'no' || c === 'n' || c === 'No' || c ==='N') {
  console.log("third response: " + c);
  alert('Correct ' + user + '! But I would love to go!');
  correct = correct + 1;
  console.log("correct =" + correct);
} else {
  console.log("third response incorrect");
  alert('Sorry, ' + user + ', sadly, no I have not been there.');
}

var age = prompt('How Old am I?');
console.log("age is a...: " + typeof(age));
var ageToNumber = parseInt(age);
console.log("ageToNumber =" + ageToNumber);
console.log(typeof(ageToNumber));
if (ageToNumber === 25){
  alert('Correct ' + user + '!');
  correct = correct + 1;
} else if ( ageToNumber >= 26){
   alert('Too Old!');
} else {
  alert('Too Young');
}

var number = 44;
  var userNumber = parseInt(prompt("what number am I thinking? (1-50)"));
  if (userNumber === number){
    alert('correct!');
    correct = correct + 1;
  }
while (userNumber !== number) {
  if (userNumber > number){
  userNumber = parseInt(prompt('too High'));
} else {
   userNumber = parseInt(prompt('too low'));
  }
 }
 if (userNumber === number){
   alert('correct!');
   correct = correct + 1;
 }

function quarterbackGame(){
 var multipleChoice = ['russell wilson','carson palmer','blaine gabbert','nick foles'];
 var multipleChoiceQuestion = prompt('Name a Quarterback in the NFC West').toLowerCase();
 for (var i = 0; i< multipleChoice.length; i++){
   console.log(i)
   if (multipleChoiceQuestion === multipleChoice[i]){
     alert('correct');
     console.log('Yes!!!!');
     correct = correct + 1;
     return;
  }
}
alert('Wrong');
}
quarterbackGame();

//
alert('you got ' + correct + ' right answers!');
