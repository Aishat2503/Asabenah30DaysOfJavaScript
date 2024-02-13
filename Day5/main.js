// Exercise 1
// Q1
const arr = []
console.log(arr)
// Q2
let num = ([2, 8, 7, 20, 30])
console.log(num)
// Q3
console.log(num.length)
// Q4
console.log(num[0])
console.log(num[2])
console.log(num[4])

//Q5
const mixedArray = ([2, 6, 'as', 9, 10, 'add'])
console.log(mixedArray)
console.log(mixedArray.length)

// Q6
let itCompanies =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// Q7
console.log(itCompanies)
// Q8
console.log(itCompanies.length)
// Q9
let firstCompany = (itCompanies[0])
let middleCompany = (itCompanies[3])
let lasCompany =(itCompanies.length -1)
let lastCompany = (itCompanies[lasCompany])
console.log(firstCompany, middleCompany, lastCompany)
// Q10
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

// Q11
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())
// Q12
let companies = ['Facebook, Google, Microsoft, Apple, IBM, Oracle, and Amazon']
let sizeOfCompanies = ["are big IT companies"]
let companiesSize = companies.concat(sizeOfCompanies)
console.log(companiesSize)
// Q13
let org = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
if (itCompanies.includes('IBM')) {
    console.log("it exist");
} else {
    console.log('it does not exist')
}
// Q15
org.sort()
console.log(org.sort())
// Q16
console.log(org.reverse())
// Q17
console.log(org.slice(0,3))
// Q18
console.log(org.slice(4,6))
// Q19
console.log(org.slice(3,4))
// Q20
console.log(org.shift(0))
// Q21
console.log(org)
console.log(org.slice(3,1))
// Q22
console.log(org)
console.log(org.pop())
// Q23
console.log(org)
console.log(org.splice())


// Level 2
import {countries} from "./countries.js";
console.log(countries);
import web_tech from "./web_tech.js";
console.log(web_tech);

// Q2
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, python";
console.log(text);
let words = /['.,']/gi;
let word = text.replace(words, "");
console.log(word);
let wordd = text.split(",");
console.log(wordd);
console.log(wordd.length);

// Q3
const shoppingCart =["Milk", "Coffee", "Tea", "Honey"]
console.log(shoppingCart)
shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.push("Sugar");
console.log(shoppingCart);
shoppingCart.splice(4,1);
console.log(shoppingCart);
shoppingCart[3] = "Green Tea"
console.log(shoppingCart);

// Q4
console.log(countries);
if (countries.includes("Ethopia")) {
console.log("Ethopia")
}else {
    countries.push("ETHOPIA")
    console.log(countries);
}
// Q5
if (web_tech.includes("Sass")){
    console.log("Sass is a CSS Processor")
} else {
    web_tech.push("Sass")
    console.log(web_tech)
}

// Q6
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"]
const backEnd =  ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat (backEnd)
console.log(fullStack) 

//Level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort());
let medianAge =((ages[4] + ages[5])/ 2);
console.log(medianAge)

let allAge = ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9];
console.log(allAge)
let averageAge = allAge / ages.length;
console.log(averageAge);

let range = ages[9] - ages[0]
console.log(range)