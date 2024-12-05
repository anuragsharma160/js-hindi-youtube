// OBJECTS

// objects ko declare karne k 2 tarike hai, ek hai literal ki tareh , ek hai constructor ki tareh

// ek concept ata hai single ton
// single ton ka simple sa matlab hota hai ki koi bhi constructor se jab aap banate hai to single ton
// ek object banta hai yani ki yeh apne tareh ka ek hi object hai

// lekin jab aap dusri tareh se banate hai to wo single ton nahi hota uske multiple instances ban jate hai
// ab yeh single ton kya hai kyu hai yeh abhi jaan ne ki need nahi hai, aap se agar interview mei pocha jaye
// to sirf itna dhyan rakhna ki jab bhi hum actually mei literals ki tareh declare karte hai (jo abhi sir sikhayenge)
// to single ton nahi banta hai

// constructor se agar banega to haa humesha single ton banega , bas itna dhyan rakho , aage jaise seekhenge aur samajh
// aa jayega

// to yeh jo cheej approach hai hum yahan pe baat kar rahe hai object literals ki

// object literals

// theek hai yeh object ko declare karne ka tarika hai, dono tarike se object hi banta hai, as such koi
// performance improvement etc kuch nahi ata bas jo antar padta hai wo single ton ka padta hai

// to abhi hum ek object declare karte hai user naam ka, usme kuch values dete hai as follows


// const Jsuser = {}
// that's it isse jada kuch nahi hai object k andar

// hum object.create karke bhi b=object bana sakte hai as follows

Object.create
// yeh jo tarika hai object.create, isi ko bola jata hai constructor method k through aur isi k andar
// single ton banta hai, iske bare mei baad mei baat hogi

// hum jiski baat kar rahe hai wo object literals ki baat kar rahe hai

// object literals
// const Jsuser = {}
// aur yeh jo curly braces hai yehi hai object, abhi yeh empty object hai but iske andar kuch values daal denge
// to usko access kar sakte hai

// const Jsuser = {
//     name: "Hitesh"
// }

// achha yahan kya hota hai yahan object k andar keys aur values ka chakkar hota hai jaise agar aap koi array declare karte hai
// jaise myArray

myArray = ["h", "i"]

// to humare pas koi tarika nahi hai ki hum kisi aur tarike se ise access kar paye, hume ek hi tarika pata hai
// and ek hi tarike se yeh access hoga i.e. indexing ki myArray ki 0th value access kar do as follows

// myArray[0]

// and myArray ki 1st value access kar do as follows

// myArray[1]

// lekin jab hum objects k andar ate hai to yeh kahani change ho jati hai, aap apni key bhi define
// kar sakte ho and value bhi define kar sakte ho, const Jsuser object mei key hai name
// and value hai "Hitesh" , array mei keys define karne ko nahi dete waha pe 0, 1, 2, 3,..... hi chalega

// yahan objects mei apka man karta hai 0 dena hai to 0 dijiye ya name bhi de sakte hai as follows

// const Jsuser = {     
//     0: "Hitesh"
// }

// const Jsuser = {
//     name: "Hitesh"
// }

// by default jab aap name dete hai above tareh se to by default system isko aise "name" process karta hai as follows

// const Jsuser = {
//     "name": "Hitesh"
// }

// yeh jo name hai yeh apne aap mei ek string ki tareh hai but aap likhte nahi hai aise "name" kyuki system maan leta hai
// ki haa  name string hi hai, ab iss name k andar jo value ("Hitesh") hai wo apke upar hai, aap string dijiye,
// number dijiye, boolean dijiye, function dijiye, ek aur object dijiye, ek aur array dijiye, koi farak nahi padta

// kuch values aur declare kar lete hai taki aur syntax samajh aye

// const Jsuser = {
//     name: "Hitesh",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
// }

// aap chahe to iske andar arrays, objects, jo aap chahe wo de sakte hai
// jaise suppose kare apko track karna hai usne last logged in kis kis days ko kiya tha to isko aap ek array
// ki tareh bhi de sakte hai as follows

// const Jsuser = {
//     name: "Hitesh",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday","Saturday"]
// }

// to hume samajh aa gaya ki object ko kaise declare kara jata hai

// =================================================================================================================

// now objects ko access kaise kiya jata hai

// bahut se log as follows ki tareh access karke dekhte hai , jaise hume Jsuser object mei email access karna hai

// console.log(Jsuser.email);
// o/p hitesh@google.com
// lekin yeh sahi tarika nahi hai, yeh nahi keh rahe yeh galat tarika hai, but iske alawa bhi ek tarika hai
// which is as follows

// console.log(Jsuser[email]);
// o/p error (email is not defined) problem iss [email] wale email ki hai kyuki sir ne bataya tha
// yeh jo name hai yeh behind the scene track kaise ho rha hai yeh ek string ("name") ki tareh rakha ja rha hai
// to hume string ki tareh likhna padega as follows

// console.log(Jsuser["email"]);
// o/p hitesh@google.com

// jab dot ki tareh dete hai to ise string ki tareh dene ki need nahi hai

// ==================================================================================================================

// yeh do tarike kyu pata hone chahiye , let humne Jsuser object mei ek aur value di "full name"

// const Jsuser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday","Saturday"]
// }

// ab apke pas koi bhi tarika nahi hai ki aap iss value ko ("full name") dot se access kar paye
// as jaise hi hum full name likhenge yeh "full name" kar dega as follows
// console.log(Jsuser["full name"]);
// o/p Hitesh Choudhary

// and console.log(Jsuser."full name") allow nahi hai

// ==================================================================================================

// js mdn datatypes

// ==================================================================================================

// agar apko symbol bhi use karna hai to bhi ek cheej hoti hai

// to hum ek symbol declare karte hai, symbol kaise declare karte hai as follows

// const mySym = Symbol()

// const mySym = Symbol("key1")
// yeh ho gya humara key1 ka symbol

// ab iss symbol ko agar declare karna hai yahan pe (Jsuser object mei) ya symbol ko as a key use karna hai
// interview mei pocha jata hai ek symbol lo usko object ki keys mei add karo aur print karke dikha do

// agr apko iss symbol ko use karna hai as a key to aap direct nahi kar sakte hai as follows

// const Jsuser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     mySym: "mykey1",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday","Saturday"]
// }

// jo bhi value deni hai jaruri nahi mykey1 hi de

// abhi yeh complain nahi kar rha hai but abhi agar hum isko print karwana chahenge as follows

// console.log(Jsuser.mySym);
// o/p mykey1
// lekin abhi bhi jab aap iska (mySym) data type dekhenge to yeh symbol ki tareh use nahi ho rha hai
// as follows

// console.log(typeof Jsuser.mySym);
// o/p string
// o/p is string but hume to symbol chahiye tha, haa iske (mySym) andar jo value hai wo hai string ("mykey1")
// kehne ka matlab yeh hai ki abhi yeh (mySym) symbol ki tareh use nahi ho rha hai, agar apko isko (mySym)
// symbol ki tareh use karna hai to actually mei apke pas ek hi tarika hai ki aap isko (mySym) ko aquare bracket
// mei likhiye as follows (yeh syntax hai documentation mei jayenge tab dekhenge)

// const Jsuser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday","Saturday"]
// }

// abhi actually mei aap iss ( const mySym = Symbol("key1") ) symbol ko refer kar rahe ho, to actually mei
// square bracket ki tareh hi use karna padta hai

// aur isko jab apko access karna ho tab bhi kya hota hai isi tareh se access kiya jata hai ki apke
// pas koi aur option nahi hai square bracket ki tareh hi ascess karna padta hai as follows

// console.log(Jsuser[mySym]);
// o/p mykey1

// console.log(typeof Jsuser[mySym]);
// o/p string , correct syntax second wala hai square bracket wala

// ================================================================================================================

// objects ki values ko access kaise karte hai dot notation se humne dekh liya

// values ko change kaise karte hai jaise apko email ko change karna hai as follows

// Jsuser.email = "hitesh@chatgpt.com"
// yeh humne email\change kar diya = k saath aap values ko overwrite kar sakte hai

// ================================================================================================================

// values ko lock karna bhi hota hai , aap chahte hai koi bhi uski value ko change nahi kar sake
// to aap kya kar sakte ho uss object ko freeze kar sakte hai as follows

// Object.freeze()
// aur usko bolna padega kis object ko freeze karna hai to Jsuser object ko freeze kar dijiye
// Object.freeze(Jsuser)

// ab iske Object.freeze(Jsuser) baad agar aap koi bhi changes lagayenge jaise suppose kariye
// iss change ( Jsuser.email = "hitesh@microsoft.com" ) ko hi lagate hai as follows

// Jsuser.email = "hitesh@microsoft.com"

// to just above changes propogate nahi honge as microsoft karne se phele humne humara object freeze kar diya
// to console.log karke dekhte hai as follows

// console.log(Jsuser);
// o/p {
//   name: 'Hitesh',
//   'full name': 'Hitesh Choudhary',
//   age: 18,
//   location: 'Jaipur',
//   email: 'hitesh@chatgpt.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   [Symbol(key1)]: 'mykey1'
// }

// notice kariye o/p mei 'mykey1' hai yeh apne aap bol raha hai ki dekho mai Symbol hu means Symbol key hu
// lekin jab hum without square bracket mei likhenge mySym ko in Jsuser object as follows

const mySym = Symbol("key1")

const Jsuser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    mySym: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// to error kuch nahi ayega when we do console.log
// console.log(Jsuser);

// o/p {
//   name: 'Hitesh',
//   'full name': 'Hitesh Choudhary',
//   mySym: 'mykey1',
//   age: 18,
//   location: 'Jaipur',
//   email: 'hitesh@google.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ]
// }

// here in o/p mySym ek normal key ki tareh hai jiski value ek string hai 'mykey1'
// lekin jab hume uss symbol ko refer karna ho to hum Jsuser object mei mySym ko square brackets mei likhenge

// =================================================================================================================

// now hum object k andar function ko add karke dekhte hai
// JS k andar functions ko type1 citizen ki tareh treat kiya jata hai means functions k andar koi disrimination
// nahi hota hai, aap unko variables ki tareh treat kariye koi difference nahi hoga jaise suppose kariye
// humare Jsuser object k saath hume greetings add karni hai as follows
// to greeting k andar kya kariye simply ek function declare kariye jasie aap karte hai as follows

// Jsuser.greeting = function(){}
// yeh humara function ho gya, small brackets mei koi parameter accept nahi kar rahe hai
// aur simply hum ek console log denge

Jsuser.greeting = function(){
    console.log("Hello JS user");
}

// Hello JS user ek greeting message ho gaya
// now console.log mei hume Jsuser object k andar greeting accessible milega as follows

console.log(Jsuser.greeting);

// o/p [Function (anonymous)]

// [Function (anonymous)] means function return back, function execute nahi hua hai sirf function ka reference
// aya hai , aage jake kaam ayega

// console.log(Jsuser.greeting) bhi ho sakta hai and console.log(Jsuser.greeting()) bhi ho sakta hai

// scope k bare mei aage samjhenge

// to jab bhi aap ek method (greeting) ko refer kar rahe hai yahan pe to humare pas value ayi [Function (anonymous)]

// lekin jab hum greeting ko aise console.log(Jsuser.greeting()) use karenge as follows

// console.log(Jsuser.greeting())
// o/p Hello JS user
// undefined

// undefined pata nahi kahan se aya , kai bar aap uska reference bhi dete hai aur usko run bhi karte hai to kai bar aa
// jata hai 

// =========================================================================================================

// ek aur function declare karte hai

// Jsuser.greetingTwo = function(){
//     console.log("Hello JS user");
// }

// ab hume kya karna hai jo bhi name (name: "Hietsh") hai iss Jsuser object k andar usko reference karna hai
// to uss name ko reference karne k liye hum kya karte hai sabse phele hum isko convert karte hai string se
// back ticks mei as follows (Hello JS user)

// Jsuser.greetingTwo = function(){
//         console.log(`Hello JS user`);
// }

// isko bolte hai string interpolation
// ab hume koi bhi variable likhna hai to hum dollar $ laga k curly braces {} k saath usko likh sakte hai

// Jsuser.greetingTwo = function(){
//         console.log(`Hello JS user, ${}`);
// }

// ab yahan pe kya hai jab bhi apko same object ko reference karna hai to aap likh sakte hai this as follows

// Jsuser.greetingTwo = function(){
//         console.log(`Hello JS user, ${this}`);
// }

// ab this laga k jaise hi dot lagayenge to jo bhi humara object hai uske andar jitni properties hai
// wo sab apko yahan p mil jayengi as follows

// Jsuser.greetingTwo = function(){
//         console.log(`Hello JS user, ${this.}`);
// }

// to humko abhi chahiye name to humne bola name as follows

Jsuser.greetingTwo = function(){
        console.log(`Hello JS user, ${this.name}`);
}

// kyuki bahut sare object ho sakte hai abhi isko pata nahi ki aap reference kar rahe hai jis Jsuser object ko
// uske andar kya kya properties hai usko pata kare k liye hum this lete hai

// now dono functions ko hum execute (execute means greeting() wala) karte hai as follows

console.log(Jsuser.greeting());
// o/p Hello JS user
console.log(Jsuser.greetingTwo());
// o/p Hello JS user, Hitesh

// ab difference sirf itna sa hai yahan pe ki first function mei value simple hai "Hello JS user"
// and second function mei hum refer kar rahe hai jo bhi name $(this.name) hai usko

// o/p mei undefined hume kai bar browser mei bhi dikhega iske upar aage baat karenge

// ======================================================================================================

// one final note ki jab bhi aap values ko access karte hai to humesha aap jadatar dot se hi karenge
// eg console.log(JsUser.email) but aise cases hote hai jahan pe actually mei hume yeh square bracket use karna
// eg console.log(JsUser["email"]) padta hai ya fir aise kuch special cases hote hai jahan pe apke pas koi
// aur option hai hi nahi eg console.log(JsUser[mySym]), apko square bracket se hi access kiya jata hai
