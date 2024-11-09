"use strict"; //treat  all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh" //string datatype
let age = 18 //number datatype
let isLoggedIn = false //boolean datatype
let state;

// number => 2 to power 53 (range)
// bigint (very big number)
//string => ""
// boolean => true/false
// null => standalone value (stand alone value hai & datatype bhi hai) null ek representation hai empty value ka,
// empty ka matlab yeh nahi hai ki apne likh diya string aur yeh khali hai like this -- let state = "",
// khali string alag hai kyuki uska type define ho gya hai string, null ek special type hai,
// aap isko assign bhi kar sakte hai as a null like this -- let state = null,
// ki hum intentionally bol rahe hai ki wo undefined nahi hai, wo khali hai,
// khali ka matlab hai ki apne server se request bheji aur usse kaha ki mujhe temperature batao,
// ab wo temperature agar 0 bhej deta hai, man lo server mei koi dikkat aa gyi h, abhi apko temperature nahi,
// bhej paa rha, 0 to ek temperatue hua to uss case mei hume zero nahi chahiye kyuki 0 ek temperature,
// hum null prefer karenge, null matlab empty, temperature aya hi nahi hai, to null means ek standalone value,
// and undefined means abhi value assign nahi hui hai

// undefined => (eg let state;)

// symbol => unique (to identify uniqueness)
// above ho gaye primitive datatypes

// object => next videos mei explain karenge

console.log(typeof "hitesh");

console.log(typeof age);

console.log(typeof null);

console.log(typeof undefined);

// run console typeof , we will see undefined apne aap mei ek type hai aur null ek object hai

console.log(typeof undefined); //undefined

console.log(typeof null); // object
