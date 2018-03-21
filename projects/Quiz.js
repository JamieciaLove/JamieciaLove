var score;
score = 0; 

alert("Welcome to Randemonium.This is a game that test your bank of random knowledge. If you score 5 points or more you win! ")

var q1;
q1 = prompt("What is the only mammal that can’t jump? Elephants or Giraffes?")

if(q1.toUpperCase() == "ELEPHANTS") {
    score++;
    alert( "Well looks like you have the memory of an elephant. Your score is: " +score)
}
    else {
    alert("Wrong ☹! The answer is Elephants.Your score is: "+score)
}

var q2;
q2 = prompt("Who invented the electric chair? Carpenter or Dentist? ")

if(q2.toUpperCase() == "DENTIST") {
    score++;
    alert( "I bet you’ll think twice before sitting in that chair again huh? Your score is: " +score)
}
    else {
    alert("Wrong ☹! The answer is Dentist. .Your score is: "+score)
}
var q3;
q3 = prompt("What is the most commonly spoken language in the world? English or Chinese?")

if(q3.toUpperCase() == "CHINESE") {
    score++;
    alert( "Nǐ hǎo. No need to dig a hole to China. I am sure someone in your neighborhood speaks Chinese. Your score is: " +score)
}
    else {
    alert("Wrong ☹! Smh. Believe it or not the world doesn’t revolve around English. No points for you! "+score)
}

q4 = prompt("What is the most common name in the world? Muhammed or John? ")

if(q4.toUpperCase() == "MUHAMMED") {
    score++;
    alert( "Well are you just a smart cookie! &oast;. Your score is: " +score)
}
    else {
    alert("Wrong ☹! The answer is Muhammed.Your score is: "+score)
}

q5 = prompt("What was given in the 1830s as medicine? Ketchup or medicated gummy bears? ")

if(q5.toUpperCase() == "KETCHUP") {
    score++;
    alert( "Gelatin was not invented until 1845. Your score is: " +score)
}
    else {
    alert("Wrong ☹! Gelatin was not invented until 1845. The answer is Ketchup.Your score is: "+score)
}

q6 = prompt("How many licks does it take to get to the center of a Tootsie pop? 263.87 or 142.18?")

if(q6.toUpperCase() == "142.18") {
    score++;
    alert( "Well looks like you're right! Don't eat too much sugar! Your score is: " +score)
}
    else {
    alert("Wrong ☹! The answer is 142.18. Your score is: "+score)
}

q7 = prompt("What use to be used as contraceptive? Crocodile poop or whale intestines?")

if(q7.toUpperCase() == "CROCODILE POOP") {
    score++;
    alert( "Get the Croc outta here! I can’t believe you got that right!  Your score is: " +score)
}
    else {
    alert("Wrong ☹! The answer is crocodile poop hehehe..Your score is: "+score)
}
if (score >= 5) {
    document.getElementById('results').innerHTML = "Congratulations! Your score is " +score+ " and you win!!"
}
    else{document.getElementById('results').innerHTML = "Your score is " +score+ ". You lose !!"
 }


