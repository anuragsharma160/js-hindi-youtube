let score = "hitesh"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// aur bhi conversions hai which are following:

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

// but things string mei bhi convert ho sakti hai as following:

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ******************************
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);

// above 2 raised to power 2

// console.log(2**3);

// above 2 raised to power 3

// console.log(2/3);
// console.log(2%3);

// above 2 is to 3 ka remainder kya ayega

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// dont write like as follows

// console.log(3 + 4 * 5 % 3);

// use paranthesis instead i.e. small bracket as follows

// console.log( (3 + 4) * 5 % 3);

// similarly for line 64 

// abhi k liye sirf itna hi jaan na hai ki iss tarah ka javascript k andar conversion hota hai
// agar string first hai to sabhi ko string mei treat kiya jayega as in line 63
// and agar string last  ei hai to phele jo conversion hai wo ho jayega as in
// line 64 phele 1+2 =3 then 32 as o/p

// tricky conversion as follows

// console.log(true);

// above ka o/p true

// console.log(+true);

// above ka o/p 1 ayega, but yeh code nahi likhna chahiye as it is confusing code
// above ka o/p surprisingly 1 ayega kyuki obvious si baat hai true apne aap mei
// boolean hai, abhi uska conversion hona hai kyuki apne usme increment kiya hai,
// to inv=crement to hua nahi but apka values aa gya hai , 1 as o/p

// console.log(true+);
// above ka o/p is error but +true possible hai

// console.log(+"");

// above ka o/p is 0
// hum already dekh chuke hai ki empty paranthesis ko jab aap boolean values mei inme
// convert karte hai to wo zero ata hai, + likhne se wo conversion ho jata hai
// but yeh conversion bhi nahi karna chahiye
// operator precedence padhna chahiye ki kiska priority phele ata hai

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

// above tarah ka code bhi nahi likhna chahiye for readability reasons

// let gameCounter = 100
// gameCounter++
// console.log(gameCounter);
// above o/p is 101

let gameCounter = 100
++gameCounter
console.log(gameCounter);
// above o/p is 101

// yaha pe pocha jayega ki prefix karte hai to kya hota hai and postfix karte hai to kya hota hai
//  above eg mei koi change nahi dikha hai but actually mei iske andar change hote hai
// prefix and postfix operator apko padhni chahiye, prefix k andar values phele increment ho
// jati hai, postfix k andar usage k baad increment hoti hai

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion