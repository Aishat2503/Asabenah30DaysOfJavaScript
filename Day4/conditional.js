// Q1
let userAge = prompt('Enter your age')
let responderAge = 18 - userAge
if (userAge>=18){
    console.log("You are old enough to drive")
} else {
    console.log(`you are left with ${18 - userAge} years to drive`)
}
// Q2
let yourAge = prompt('enter your age')
let myAge = 25
let inputAge = yourAge - 25
if (yourAge>=25 ){
    console.log(`you are ${yourAge-25} years older than me.`)
} else {
    console.log(`I am ${25-yourAge} years older than you.`)
}

// Q3
let a = 4
let b = 3
if(a>b){
    console.log('4 is greater than 3')
} 
else {
    console.log('3 is less than 4')
}

let c = 6
let d = 8
?console.log('6 less than 8')
:console.log('8 greater than 6')

// Q4
const number = prompt("What number do you wish to know if its even or odd?");

if(+number%2===0) {
alert(`${number} is an even number`)
} else {
    alert(`${number} is an odd number`);
}

// Level 2
// Q1
let grade = prompt("enter your score")
if(grade >=80 && grade <=100 ) {
    console.log('Your grade is A')
} else if(grade>=70 && grade<=79){
    console.log('Your grade is B')
}else if(grade>=60 && grade<=69){
    console.log('Your grade is C')
} else if(grade>=50 && grade<=59){
    console.log('Your grade is D')
}else if(grade>=0 && grade<=49){
    console.log('Your grade is F')
}
else{
    console.log("You do not have a grade")
}

// Q2
let season = prompt("Enter Month")
if(season ="September"|| "October"|| "November") {
    console.log('the season is Autumn')
} else if(season = "December"|| "January" ||"February"){
    console.log("the season is Winter")
} else if(season = "March" || "April" || "May") {
    console.log("the season is Spring")
}else if(season ="June" || "July" || "August"){
    console.log("the season is Summer")
}else{
    console.log("No Match")
}

let userInput =prompt("What day is today?")
let day = userInput.toLowerCase
switch(day){
    case 'Monday':
        console.log("Today is working day")
        break
    case 'Tuesday':
        console.log('Today is working day')
        break
    case 'Wednesday':
        console.log('Today is working day')
        break
    case 'Thursday':
        console.log('Today is working day')
        break
    case 'Friday':
        console.log('Today is working day')
        break
    case 'Saturday':
        console.log('Today is weekend')
        break
    case 'Sunday':
        console.log('Today is weekend')
        break
    default:
        console.log('It is not a week day')
}

