const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");
// above syntax thoda outdate hai aaj k time mei for concatenation

// aaj k time mei following syntax for concatenation

console.log(``);

// back ticks use karna ka fayeda hai yahan p ata hai string interpolation means hum banate hai
// placeholders unke andar jo bhi variable hai aap directly wha p inject kar sakte hai jaise as follows

// console.log(`Hello my name is `);
// is k baad apko variable inject karna hai to use dollar sign and likhte jayiye apna string as follows

// console.log(`Hello my name is ${} `);

// console.log(`Hello my name is ${}  and my repo count is`);
// again count is k baad variable inject karna hai then again use dollar sign as follows

// console.log(`Hello my name is ${}  and my repo count is ${}`);
// above syntax is more readable more reliable

console.log(`Hello my name is ${name}  and my repo count is ${repoCount}`);
// above syntax ka result mei koi difference nahi but yeh modern way hai syntax ka
// jisko string interpolation bola jata hai, ab iska fayeda kya hai ki aap bahut sari
// cheejein on the go bhi kar sakte hai jaise yeh string name hai to humko kuch method
// iske andar karna hai jaise TO uppercase ja jo bhi hume lagana hai to hum easily laga sakte hai
// as follows

console.log(`Hello my name is ${name.To} and my repo count is ${repoCount}`);

// string ko declare karne ka ek aur tarika bhi hai as follows (gameName) to aap ek aur syntax use kar
// sakte hai jiske andar new keyword use karte hai to aap objects use karte hai JS k,

// const gameName = new

//  then String ka use kara

// const gameName = new String

// and then iske constructor k andar apne name diya jaise sir ne name diya hiteshhc

const gameName = new String('hiteshhc')
// value same hi ayegi jaise string declare karte hai, behind the scence line 1 bhi apka object hi invoke
// kar rha hai

// sabse pheli baat hume koi bhi property chahiye, pata hai key value pairs hai, easily dekhna hai
// to gameName liya 
// console.log(gameName);
// uski keys access karni hai to hum uski zeroth key access karte hai
console.log(gameName[0]);
// above ka o/p h ayega, this is how we access key value pair

// now how to access prototype, to we use dot as follows & yahan pe bahut sare syntax hai isko access karne k

// console.log(gameName.);

// ek syntax sir batate hai as follows

console.log(gameName.__proto__);
// above ka output {} ayega ie object , yeh objext abhi apko empty mila hai lekin actually mei
// yeh empty nahi hai iske andar aur bhi values hai, sabse easy tarika hai in values ko dekhne ka
// browser mei console log k andar, access aap sabko kar sakte hai, ab yeh jitne bhi methods hai
// unko access karne k liye apko aisa nahi karna padega ki .proto .proto aur fir yaha pe aap
// concatenate aur yeh sab use kar rahe hai nahi, direct hi access kar sakte hai
// console.log(gameName.__proto__.);
// yeh (above) syntax hai to syntax mei apko proto nahi lagana padta, but aap dekhna chahe to
// object dekh sakte hai

// kuch objects sir use karke dikha dete hai as follows
// console.log(gameName);
// jaise aap .length access karte hai vaise hi aap prototype k sare methods bhi access kar sakte hai
// for eg as follows

console.log(gameName.length);
// above ka o/p 8
// lekin aur bhi prototype k method isi tareh se access kar sakte hai,
// jin methods k aage f likh rha hai means wo sare functions hai ya methods hai jo
// directly humare liye available hai


