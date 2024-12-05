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

const mySym = Symbol("key1")
// yeh ho gya humara key1 ka symbol

// ab iss symbol ko agar declare karna hai yahan pe (Jsuser object mei) ya symbol ko as a key use karna hai
// interview mei pocha jata hai ek symbol lo usko object ki keys mei add karo aur print karke dikha do

// agr apko iss symbol ko use karna hai as a key to aap direct nahi kar sakte hai as follows

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

// jo bhi value deni hai jaruri nahi mykey1 hi de

// abhi yeh complain nahi kar rha hai but abhi agar hum isko print karwana chahenge as follows

console.log(Jsuser.mySym);
// o/p mykey1
// lekin abhi bhi jab aap iska (mySym) data type dekhenge to yeh symbol ki tareh use nahi ho rha hai
// as follows

console.log(typeof Jsuser.mySym);
// o/p string
// 9:22