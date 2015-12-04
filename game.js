
var user = prompt('What is your name?');
console.log("users name=" + user);
alert('Happy weekend! ' + user + ', time for a cold beer!');
//
var correct = 0;
var sister = document.getElementById('sister');
function siblings(){
var a = prompt('Do I have any siblings? (yes or no repsonses)');
console.log("first prompt finished");
if (a === 'yes' || a === 'y' || a === 'Yes' || a === 'Y'){
  console.log("first response: " + a);
  sister.className = 'right';
  sister.textContent='Yes! Correct ' + user + ' I have 1 sister';
  correct = correct + 1;
  console.log("correct = " + correct);
} else {
  console.log("frist response incorrect")
  sister.className='wrong'
  sister.textContent= 'Incorrect, sorry ' + user + ', I have 1 sister';
}
}
siblings();
//
var home = document.getElementById('home');
function living() {
var b = prompt('Have I lived anywhere but Seattle?');
if (b === 'yes' ||  b ==='y' || b === 'Yes' || b === 'Y'){
  console.log("second response: " + b);
  home.className='right';
  home.textContent ='Correct ' + user + '! I lived in Pullman during college';
  correct = correct + 1;
  console.log("correct =" + correct);
} else {
  console.log("second response incorrect");
  home.className='wrong';
  home.textContent='Sorry ' + user + ', I lived in Pullman for 2 years';
}
}
living();
//
var aussie = document.getElementById('aussie');
function austrailia(){
var c = prompt('Have I ever been to Austrailia?');
if (c === 'no' || c === 'n' || c === 'No' || c ==='N') {
  console.log("third response: " + c);
  aussie.className='right';
  aussie.textContent='Correct ' + user + '! But I would love to go!';
  correct = correct + 1;
  console.log("correct =" + correct);
} else {
  console.log("third response incorrect");
  aussie.className='wrong';
  aussie.textContent='Sorry, ' + user + ', sadly, no I have not been there.';
}
}
austrailia();

var old = document.getElementById('old');
function birthday() {
var age = prompt('How Old am I?');
console.log("age is a...: " + typeof(age));
var ageToNumber = parseInt(age);
console.log("ageToNumber =" + ageToNumber);
console.log(typeof(ageToNumber));
if (ageToNumber === 25){
  old.className='right';
  old.textContent='Correct ' + user + '!';
  correct = correct + 1;
} else if ( ageToNumber >= 26){
  old.className='wrong';
  old.textContent='Too Old! I am only 25';
} else {
  old.className='wrong';
  old.textContent='Too Young, I am actully 25';
}
}
birthday();

var random = document.getElementById('random');
function number (){
var number = 44;
  var userNumber = parseInt(prompt("what number am I thinking? (1-50)"));
  if (userNumber === number){
    random.className='right';
    random.textContent= 'Woah! correct!';
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
   random.className='right';
   random.textContent= 'Great job! Correct!';
   correct = correct + 1;
 }
 }
 number();

var qb = document.getElementById('qb');
function quarterbackGame(){
 var multipleChoice = ['russell wilson','carson palmer','blaine gabbert','nick foles'];
 var multipleChoiceQuestion = prompt('Name a Quarterback in the NFC West').toLowerCase();
 for (var i = 0; i< multipleChoice.length; i++){
   console.log(i)
   if (multipleChoiceQuestion === multipleChoice[i]){
     qb.className='right';
     qb.textContent='Correct, Russell Wilson, Carson Palmer, Blaine Gabbert, and Nick Foles are the NFC West QBs';
     console.log('Yes!!!!');
     correct = correct + 1;
     return;
  }
}
qb.className='wrong'
qb.textContent='Wrong, Russell Wilson, Carson Palmer, Blaine Gabbert, and Nick Foles are the NFC West QBs';
}
quarterbackGame();

//
var goodjob = document.getElementById('goodjob')
goodjob.textContent='You got ' + correct + ' right answers!';
