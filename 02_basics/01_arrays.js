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
// square brackets lagate hai aur fir hum iski indexing ko dekhte hai as follows

const myArr = [0, 1, 2, 3, 4, 5]

console.log(myArr[]);

// array ki indexing start hoti hai zero se, (eg mei first element zero likha hai (0, 1, 2, 3, 4, 5))
