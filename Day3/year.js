// let useYear = prompt('enter numbers of years')
// if(useYear=100)
// alert('[you lived 315360000 seconds]')

const nOw =new Date
const yEar =nOw.getFullYear()
const month = nOw.getMonth()
const date =nOw.getDate()
const hours = nOw.getHours()
const minutes = nOw.getMinutes()
console.log(`${yEar}-${month}-${date} ${hours}:${minutes} `)

const present =new Date
const dates =present.getDate()
const months = present.getMonth()
const yaars =present.getFullYear()
const hour = present.getHours()
const minUtes = present.getMinutes()
console.log(`${dates}-${months}-${yaars} ${hour}:${minutes} `)
console.log(`${dates}/${months}/${yaars} ${hour}:${minutes} `)

const time = new Date
const hoUr = time.getHours()
const minNutes = time.getMinutes()
console.log(`${hoUr}:${minNutes}`) 