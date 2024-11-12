// kis tarah se data ko memory mei rakha jata hai and access kiya jata hai
// uss basis pe data ka 2 catageorization hai, primitive and non primitive/reference datatype

// Primitive
// above ke 7 types, jitne bhi primitive datatype hai yeh call by value hote hai matlab
//  jab bhi aap inko kahin se kahin copy karte hai to inka jo original data hai wo reference apko
// memory ka nahi diya jata inko copy karke apko diya jata hai alag aur usme jo bhi aap changes karte hai wo
// copy mei changes hote hai

// 7 types : String, Number, Boolean, null (means empty, not empty string, not zero, empty means ekdum khali, eg of temperature),
// undefined (variable declared, memory space declared, but value is not declared), Symbol (kisi bhi value ko unique banane
// ke liye symbol use hota hai), BigInt (scientific values ya bahut badi values ko hum big int mei use karte hai)
// yehi hai primituve datatype

// Reference Datatype (Non Primitive) - yeh sari values wo hai jo ki memory mei inka reference apko directly
// allocate kiya ja sakta hai

// Above datatypes are- Array, Objects, Functions

// JS is statically typed language or dynamically typed language, kai bar languages hoti hai iske andar apko
// batana padta hai ki variable ka type kya hai, to agar language k andar type define karna hai to obvious si
// baat hai thodi safety badh jati hai but JS mei aisi koi need nahi hai.

// const score = 100

//  Jaise kai bar apko constant define karna hai to apne constant define kara score aur uska value diya 100
// to theek hai yeh simply ho gya, ab humne kabhi JS ko yeh nahi bataya ki iske andar 100 ayegi to yeh number
// type aap define karo aur agar iske andar hume false define karna hai

const score = false

// to humne JS ko kabhi yeh nahi bataya ki aap yeh boolean type ka value do,
//  so tell JS is statically typed or dynamically typed

const scoreValue = 100.3
// decimal ka koi special nahi hai like float value, number is number

const isLoggedIn = false
// above ho gaya boolean datatype

const outsideTemp = null
// above is null datatype

// let userEmail;

// above is undefined datatype or we can also write above as follows

let userEmail = undefined

// To declare symbol as follows

// const id = Symbol()

// for above -- jo hume return type milta hai wo bhi ek alag datatype milta hai usko
// symbol bolte hai, to iske andar humne bola 123 as follows

const id = Symbol('123')

// ab koi aur string bhi ho sakti hai as follows

const anotherId = Symbol('123')

// dekhne mei lag rha hai above dono same hai but symbol ka kaam hi yehi hai , agar aap
// value bhi same pass karoge uske andar chahe string chahe kuch bhi par apko jo result
// milega, id aur anotherId ki value same nahi hogi
// verify kar lete hai kya id equal hai anotherId k as follows

// console.log(id === anotherId);

// above ka o/p false, halaki values humne same li hai i.e. ('123') par jo return value hume mila
// hai wo same nahi hai

// To declare BigInt as follows

// const bigNumber = 346753273823937774626789n

// such big numbers are declared as BigInt

// Reference (Non Primitive)
// Array Objects Functions
// arrays ko hum square bracket mei likhte hai and iske andar hum values dete hai as follows
const heros = ["shaktiman", "naagraj", "doga"];

// curly braces k andar objects hote hai

// {
//     name: "hitesh",
//     age: 22,
// }

// hum ise kisi variable mei bhi store kar sakte hai as follows
let myObj = {
    name: "hitesh",
    age: 22,
}

// curly braces k andar jitna bhi values hai wo object hai, datatype kuch bhi ho sakta hai
// string bhi ho sakta hai like "hitesh", number bhi ho sakta hai like 22, boolean bhi ho sakta hai,
// function bhi ho sakta hai, array bhi ho sakta hai, ek dusra object bhi ho sakta hai

// Functions are declared as follows
// kafi tarike hai function ko declare karne k, abhi hum variable wala tarika seekhte hai
// ki function ko bhi aap JS mei ek variable ki tarah treat kar sakte ho

// function(){}

// above function ka definition hai
// ab hum function ko variable mei store karna chahte hai as follows

// const myFunction = function(){}

//  jaise hum baki variables ko store kar rahe the ese hum isko bhi kar sakte hai

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof bigNumber);

// console.log(typeof outsideTemp);

// console.log(typeof scoreValue);

// console.log(typeof myFunction);

// for above -- function actual mei function hi return karta hai, but isko bola jata hai object function
// to jo yeh jitne bhi non primitive type hai inka jo return type ata hai wo object hi ata hai

// console.log(typeof heros);

// console.log(typeof id);

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// assignment - har datatype ka return type likhna hai



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Two types of memories are there as follows
// Stack, Heap
// Jitne bhi PRIMITIVE datatype bataye the wahan sab jagah STACK memory use hoti hai
// Jitne bhi NON-PRIMITIVE datatype bataye the wahan sab jagah HEAP memory use hoti hai

// Itna yaad rakhna ki jab bhi STACK memory use hoti hai, iska matlab jo bhi aapne variable
// declare kara hai uska apko ek copy milta hai

// Jab bhi ek memory HEAP k andar define hoti hai ya koi object ya kuch bhi HEAP k andar chala
// jata hai to wahan se apko milta hai reference original value ka to jo bhi change karenge wo
// original value mei change hoga

// Eg as follows

// let myYoutubename = "hiteshchoudharydotcom"

// myYoutubename ek variable hai of primitive type, now iske andar values change hoti rehti hai
// (variable k andar may be) , now eg of kis tareh se hum value ko change karte hai to hum ek 
// value lete hai as follows

// let anothername = myYoutubename

// to ab kya hoga iss anothername k andar jo bhi value hogi wo kya hai -- hiteshchoudharydotcom

// console.log(anothername);

// above ka o/p hiteshchoudharydotcom

// lekin ab hum anothername k andar value change kar dete hai as line number 176 of same eg (as above) as follows

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

// to abhi humne anothername k andar value change kar di, to aap soch rahe honge ki anothername
// k andar abhi value kya hai -- chaiaurcode hai , lekin yeh jo reference hai humne 
// to isi ka diya tha (hiteshchoudharydotcom ka or may be myYoutubename ka)
// to myYoutubename k andar kya value hogi , yahi p interesting concept hai to hum dekhte hai ki
// myYoutubename k andar kya value hai and anothername k andar kya value hai
// myYoutubename k andar purani hi value hai --- hiteshchoudharydotcom aur
// anothername hai uski value change ho gayi as --- chaiaurcode

// now advanced datatype (object) lete hai taki hume value samajh mei aa jaye as follows

let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne


userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// above both ka o/p hitesh@google.com

