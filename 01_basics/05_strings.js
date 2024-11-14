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

// const gameName = new String('hiteshhc')

// value same hi ayegi jaise string declare karte hai, behind the scence line 1 bhi apka object hi invoke
// kar rha hai

// sabse pheli baat hume koi bhi property chahiye, pata hai key value pairs hai, easily dekhna hai
// to gameName liya 
// console.log(gameName);
// uski keys access karni hai to hum uski zeroth key access karte hai

// console.log(gameName[0]);

// above ka o/p h ayega, this is how we access key value pair

// now how to access prototype, to we use dot as follows & yahan pe bahut sare syntax hai isko access karne k

// console.log(gameName.);

// ek syntax sir batate hai as follows

// console.log(gameName.__proto__);

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

// console.log(gameName.length);

// above ka o/p 8
// lekin aur bhi prototype k method isi tareh se access kar sakte hai,
// jin methods k aage f likh rha hai means wo sare functions hai ya methods hai jo
// directly humare liye available hai, to ek hum inme se use karke dekhte hai .toUpperCase
// to aap notice karenge ki sir ne yeh nahi likha yaha pe ki .__ (dot underscore underscore)
// proto__ aur uske baad sir likh rahe hai toUpperCase as follows

// console.log(gameName.toUpperCase());

// hum directly upper case use kar sakte hai (yeh next viseos mei samjhenge)
// above ka o/p HITESHHC
// to hume jo value mili wo sara ka sara convert ho gya hai lekin isne humari original
// string ko change nahi kiya hai kyuki Stack & Heap video concept

// agar hume index dekhna hai ki kis index p konsa character hai to string
// k andar ek method hota hai charAt as follows
// let hume dekhna hai 2nd position p konsa character hai

// console.log(gameName.charAt(2));

// above ka o/p -- t, as count like 0,1,2...

// to know character position as follows
// let t kis position pe hai

// console.log(gameName.indexOf('t'));

// above ka o/p -- 2, as count like 0,1,2 (t at 2)

// now kuch interesting methods, kai bar hume string ko kuch parts mei break karna hota hai
// ya usko sanitize karna hota hai, us tarah k methods, to string k methods k bare mei aap
// jitna janenge utna hi fayeda hoga, sabse asan tarika kisi bhi method k bare mei jaanna
// go to browser and dropdown, & fir bhi kisi method ka nahi pata lag rha to jayiye mdn docs pe
// ek bar strings k sare methods k bare mei pata karo through mdn etc

// kuch aur methods as follows

// const gameName = new String('hitesh-hc')


// iske andar simply hume karna hai slice
// to aap isko (gameName) kisi variable mei bhi store kar sakte hai, to hum isko ek variable 
// mei store kar lete hai newString naam se as follows

// const newString = gameName

// aur humne bola yeh jo gameName hai, hume ise karna hai ek substring mei divide

// const newString = gameName.substring()

// ab kya kya hume iske andar argument dene padenge, hume dena padega ek start number
// and dena padega ek end number
// to start number dete hai  suppose kariye 0 and end number hum dete hai isko 4

// const newString = gameName.substring(0, 4)

// console.log(newString);

// above ka o/p -- hite
// means last mei jo humne value daali (i.e. 4=s) hai wo include nahi ho rahi hai
// to substring mei humne isko divide kar liya
// now substring k saath ek aur interesting cheej hai so we take new variable

// const anotherString = gameName
// and ek aur naya method use karte hai jiska name hai .slice

// const anotherString = gameName.slice(0, 4)

// similarly as substring we can give values as eg (0, 4)
// but we can also give negative values and it will count from reverse
// like iskak length 8 hai and we give start value as -8 and end value as 4 (-8, 4)

// const anotherString = gameName.slice(-8, 4)

// console.log(anotherString);

// above o/p\- ite (isne peeche se start kara and fir 4 character) (-8=starting ka h, isko leave kar diya 
// and fir till 4th character tak count kiya i.e. starting se 4th character tak as 4 means plus ka 4
// and 4 means e from starting)

// slice k andar hi hum negative values ko use kar sakte hai, if hum substring mei negative values denge
// eg (-8, 4) as follows then substring will ignore and give o/p as hite

// const anotherString = gameName.substring(-8,4)
// console.log(newString);


// trim method and replace method as follows

const newStringOne = "   hitesh    "
// apne ek string define kari usme bahut sare space hai then hitesh and again bahut sare space hai
// is tarah ki space wali strings bahut hi commonly ati hai, kahan pe ati hai
// jab aap ek input form banayenge apni website pe to kai bar user deliberately and unknowingly
// bahut sare extra characters aur especially spaces add kar deta hai, wo spaces kai bar hume
// nahi chahiye hote hai, (obvious si baat hai password field mei aisa nahi karenge) but haan kai baar
// jaise email de rha hai to wha hume yeh starting k space and yeh last k space yeh sab nahi chahiye
// hum database mei yeh sab save nahi karna chahenge to us case mei humko kuch bhi nahi karna hai
// ek bar hum consol log karenge iss newStringOne ko and ek bar hum console log karenge .trim ko as follows

console.log(newStringOne);
console.log(newStringOne.trim());
// above 1st ka o/p hitesh with starting space and ending space but above 2nd ka o/p only hitesh
// trim starting space and end space ko remove kar deta hai
// go for trim javascript mdn (notice karein yeh white space characters pe hi kaam karta hai &
// plus line terminators pe matlab jo new line /n character jo aap use karte hai)

// replace method of string

const url = "https://hitesh.com/hitesh%20choudhary"

// ab problem kya hai jo apka browser hai wo spaces nahi samajhta hai
// ab kisi ne webpage ka naam de diya hai https://hitesh.com/hitesh choudhary, to browser kya karega
// automatically usko convert kar dega (%20) like this https://hitesh.com/hitesh%20choudhary i.e.
// url encoding mei, ab is situation mei kya hoga apko chahiyega ki yeh jo cheej hai (%20) yeh hum 
// remove karna chahenge to 2-3 methods hai kis tarah hum karna chahenge ya suppose kare hume karna hai
// yeh jo hitesh url hai isi ko hume completely replace karna hai to unn sare cases mei aap isko change
// kar sakte hai , jaise url hai usme aap daal sakte hai .replace as follows

// url.replace()

// to jaise hi aap replace denge to isko bolenge kya mai search karu aur kis se mai usko replace karu
// to suppose karo ki aap chahte hai ki hum iss pori string k andar dhundna chahta hu %20 ko aur replace
// karna chahta hu usko - (dash) se as follows

// url.replace('%20', '-')

console.log(url.replace('%20', '-'));
// above ka o/p - https://hitesh.com/hitesh-choudhary
// ab yeh url usable hai
// jitna aap string k saath famaliar honge utna backend and fromtend mei help milegi
// as apko pata hai theek hai yeh string aa gayi hai and ab hume bhaut sare methods pata hai string k
// and hum bahut sara usse value derive kar sakta hu

// itna hi nahi, hum issse poch bhi sakte hai kuch questions jaise for eg url.includes as follows
// to kya url kandar kuch keywords hai jaise ki hitesh h ya nahi


console.log(url.includes('hitesh'));
// above o/p - true because hitesh hai url mei
// strings sabse jada powerful hote hai kisi bhi language mei

console.log(url.includes('sundar'));
// above o/p - false because sundar nahi hai url mei

// suppose humare pas ek string hai 'hitesh-hc' use hum ek array mei convert karna chahte hai for any reason
// based kis pe kyuki aise thodi na hai kahin se bhi kuch bhi value leke array mei convert kar denge
// hum chahte hai ki aisi jitni bhi values hai ''hitesh-hc-com, to yeh alag part mei split ho jaye based
// on dash (-), based on kisi bhi ho sakta hai spaces bhi ho sakta hai, dash bhi ho sakta hai, kuch
// bhi ho sakta hai, to yeh sab kaise karenge iske liye bhi method hai string k as follows

const gameName = new String('hitesh-hc-com')

// console.log(gameName.split());
// ab method to humne bata diya split but split ko use karna nahi ata
// to search for split javascript mdn if browser console mei samajh nahi a rha to
// in mdn docs, isne bola yeh jo pora string hai, is string ko split karne k liye spaces k base pe
// hum string ko split kar rahe hai aur yaha p o/p le rahe hai, humko chahiye ek separator aur ek limit
// sir yaha limit nahi dete hai, sir only serarator de rahe hai
// to humare pas jo separator hai wo hai simply ki space bhi ho sakta hai
// like space between this-- ' ' like this -- console.log(gameName.split('  '));
// but humare pas hai dash (-) as follows

console.log(gameName.split('-'));

// above ka o/p aa gaya ek array --- [ 'hitesh', 'hc', 'com' ], jiske andar 3 strings hai
// ''hitesh, 'hc', 'com', humne split kara basis on dash, but aap split kar sakte hai kisi
// aur cheejon pe

// iske alawa bhaut sari cheejein hai , aap bahut sare strings ki value bhi nikaal
// sakte hain, so isz lecture k baad mdn ka help lo & browser console ka help lo
// blink, bold, character, concat, constructor, endswith, fixed kya karta hai
// practice on string

// last but not the least -- iss syntax ko follow karna back ticks wale ko ``
// as in line 9 and line 25

// yeh plus coma syntax as in line 4 yeh old syntax hai, koi bhi new code mei
// aise nahi likhta hai
