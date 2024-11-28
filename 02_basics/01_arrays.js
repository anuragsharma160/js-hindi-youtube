// array

// Arrays hum humesha likhte hai square brackets mei
// () - paranthesis
// [] - brackets / square brackets
// {} - braces / curly braces

// const myArr = [0, 1, 2, 3, 4, 5]

// to above ho gya array
// 0, 1, 2, 3, 4, 5 inko individually bolte hai elements, ab yeh string bhi ho sakta hai,
// yeh number bhi ho sakta hai, ya fir yeh mix bhi ho sakta hai
// koi bhi problem nahi hai agar hum yaha true and "hitesh" bhi likh de as follows

// const myArr = [0, 1, 2, 3, 4, 5, true, "hitesh"]
// ab bhi yeh ek array hai, jaruri nahi hai same type k element ho, element different type k bhi ho sakte hai
// abhi hum similar type k elements ko hi lete hai

// const myArr = [0, 1, 2, 3, 4, 5]
// documentation explanation - apne ek single variable (myArr) declare kara, ab uske andar app saare 
// elements [0, 1, 2, 3, 4, 5] rakh sakte hai

// Important baat - JS k array resizeable hote hai, ek bar apne declare kar diya iska matlab yeh nahi
// ki aur elements nahi add kar sakte, aur elements bhi add kar sakte hai
// mix ho sakta hai datatype ka (elements) abhi humne jana numbers bhi ho sakte hai
// booleans bhi ho sakte hai, string bhi ho sakte hai, objects bhi ho sakte hai,
// array k andar array bhi ho sakte hai, to jaisa chahe aap vaisa rakh sakte hai

// dusri important cheej ki associative arrays nahi hote hai, yani ki array elements cannot be accessed using arbitrary strings
// ab arrays ka ek problem kya hota hai ki jab bhi isme apko koi value access karni hoti hI, jaise ki suppose kariye
// hume karna hai console.log simply, koi bhi value apko access karni hai, access karne ka tarika kya hota hai
// hum square brackets lagate hai aur fir hum iski indexing ko dekhte hai as follows console.log(myArr[])

const myArr = [0, 1, 2, 3, 4, 5]

// console.log(myArr[]);

// array ki indexing start hoti hai zero se, (eg mei first element zero likha hai [0, 1, 2, 3, 4, 5]) , but
// ho sakta hai array myArr mei first element 0 nahi hitesh ho jaise - [hitesh,1, 2, 3, 4, 5]
// jo first element hai using indexing hoti hai zero se as follows

// console.log(myArr[0]);
// o/p is 0
console.log(myArr[1]);
// o/p is 1

// to iss tareh se hum values ko access karte hai

// hum aise - console.log(myArr["one"]) values ko access nahi kar sakte
// so arrays are based on zero based indexing

// ek important cheej hai ki arrays jo hai JS k andar isme jab bhi aap copy operation karenge to yeh
// shallow copies banata hai
// shallow copy of an object is a copy whose property share the same reference point (stack and heap
// vala video) that means accha same reference point hi karte hai yani ki jo bhi hum change karenge
// wo original array mei bhi change hoga (to hume samajh aa gaya)

// isi tareh se deep copies bhi hai, deep copies bolti hai properties do not share the same reference
// to hume pata lag gaya ki iski properties kaise banti aur kaise isme manipulation hota hai

// arrays declare karne k aur bhi tarike hai, first array tha numbers basis pe

const myHeros = ["shaktiman", "naagraj"]

// ek aur tarika hai arrays ko declare karne ka, hum keywords use kar sakte hai new
// yahan hum sqaure brackets nahi dete hai like this const myArr2 = new Arry([]), yahan hum
// direct values dete hai like this myArr2 = new Arry(1,2,3,4) automatically yeh square brackets add kar dega
const myArr2 = new Array(1, 2, 3, 4)

// browser console mei hume array ki property milti hai .length and prototype access milta hai array ka
// browser console example const numbers = [1, 2, 3, 4]


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Arrya methods

// myArr.push()
// yeh method simply kya karta hai values ko add kar deta hai array k andar
// to let humne kaha 6 as follows

// myArr.push(6)
// console.log(myArr);

// o/p [
//   0, 1, 2, 3,
//   4, 5, 6
// ]

// sabse interesting baat yeh hai ki yeh jo myArr hai yeh abhi change ho gya hai iske andar ek value
// add ho gyi hai, ek aur value add karke dekh lete hai as follows

// myArr.push(7)
// console.log(myArr);

// o/p [
//   0, 1, 2, 3,
//   4, 5, 6, 7
// ]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// myArr.pop()
// pop k andar apko koi argument nahi dena hota hai, pop ka simple matlab hai jo bhi last value hogi array
// k andar usko remove kar denge

// myArr.pop()
// console.log(myArr);

// o/p [
//   0, 1, 2, 3,
//   4, 5, 6
// ]
// last value 7 remove kar di .pop() ne

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// myArr.unshift()
// humne unshift mei diya 0

// myArr.unshift(0)

// console.log(myArr);
// o/p [
//   0, 0, 1, 2,
//   3, 4, 5
// ]

// humne dekha yeh 0 ek aur add ho gya starting mei

// hum yaha 9 bhi de sakte the as follows

// myArr.unshift(9)
// console.log(myArr);

// o/p [
//   9, 0, 1, 2,
//   3, 4, 5
// ]
// 9 add ho gya starting mei, ab jab array k start mei insert hua hai to actually mei problem pata hai kya ati hai
// ki saari array ki values shift karni padi hume, ab yaha to five six values thi lekin agar sochiye 10 thousand
// values hoti to, obvious si baat hai kafi time consuming operation ho jata to itna maja nahi ata, computer pe bhi
// load ata, computer pe load nahi aane dena hai kisi bhi haal mei

// lekin kai bar ho sakta hai kuch to dos hum bana rahe hai, kuch important hai aur atart mei hi  add karna hai
// to theek hai lenge kaam mei kyuki optimization baad ki cheej hai phele cheej kaam karni chahiye jaise humne usko
// design kari hai, apne design kara hai to do usme bola hai ki hum to first/start mei add kar dete hai isko,
// ab aap keh rahe hai nahi mai unshift use hi nahi karenge kyuki optimization nahi hai, arre theek hai
// optimization nahi hai to kya hua aur bhi tarike hai aap ascending descending mei show kar sakte hai but hume to
// database mei chahiye hi aise, client bol rha hai use first mei chahiye but hum/aap bol rahe hai yeh optimize nahi
// hai kyuki humne cp padha hai hum to nahi karenge aise nahi hota hai

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// myArr.shift()
// yeh push pop ki tareh hi hai, isme hum koi parameter nahi dete hai

// myArr.shift()
// console.log(myArr);

// o/p [ 0, 1, 2, 3, 4, 5 ]
// unshift ne 9 dala tha starting mei [9, 0, 1, 2, 3, 4, 5], shift ne usko remove kar diya

// o/p [ 1, 2, 3, 4, 5 ] (without shift), starting ka 0 remove kar diya shift ne

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// iss bar hum dirctly console.log mei karke dekh lete hai
// some methods of array are like questionaire type which gives answer in terms of true and false

// console.log(myArr.includes());

// hume pata karna hai iss myArr array k andar 9 include hai ya nahi hai as follows
// console.log(myArr.includes(9));
// o/p false

// important yeh nahi hai ki result (o/p) kya aane wala hai, important yeh hai ki result ka datatype kya hai
// ab hume pata hai ki yahan pe false hai yani ki boolean hai, to mujhe kabhi aisa comparison karna pada future
// mei to yahan pe iska (line 172) result mujhe pata hai ki boolean type ayega to usse mai value ko judge kar sakta hu

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// isi tareh se hum index bhi poch sakte hai, index ka result obvious si baat hai true and false mei nahi ayega
// ab index hum pochte hai 9 ki to kya result ata hai yeh bahut interesting hai

// console.log(myArr.indexOf(9));
// o/p is -1
// but -1 to hai hi nahi , haa yeh hi to yeh bol rha hai nahi hai pata use ki yeh value exist karti hai ya nahi karti

// console.log(myArr.indexOf(19));
// o/p is -1
// to aap chahe 9 pocho ya kuch aur o/p -1 hi ayega

// lekin agar aisi value poche jo exist karti hai jaise 3

// console.log(myArr.indexOf(3));
// o/p is 3 , means 3 third index pe lie karta hai

// ================================================================================================================

const newArr = myArr.join()

// previous array ko bhi print kar lete hai
// 13:48