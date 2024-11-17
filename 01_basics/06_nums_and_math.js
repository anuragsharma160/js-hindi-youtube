const score = 400
console.log(score);
// o/p - 400


// browser console mei JS ne automatically detect kiya ki yeh jo score hai iska type hona chahiye number
// lekin kai bar aap explicitly bhi define kar sakte ki hume number hi datatype chahiye as follows

// suppose aap koi banking application bana rahe hai that's why balance as follows
// bahut sare JS mei humko objects milte hai jaise String milta hai, Number bhi milta hai, 
// aur aap dedicatedly define kar sakte hai ki hume number hi chahiye, ab 100% guarantee hai ki yeh number
// hi hoga, line number 1 mei bhi hai, but following is new way to declare a number

const balance = new Number(100)
console.log(balance);
// o/p - [Number: 100]

// o/p explanation - line 1 ne bola 400 hai kyuki automatically define hua ki yeh number hai, [Number: 100] ne specifically
// cast kiya hai ki number hai yeh, to yeh hi difference ata hai jab aap specially bolte hai ki new object mei define
// kar rha ho jo Number type ka hai

// copy paste lin 14, 15 in browser console

// number methods as follows

console.log(balance.toString());
// o/p - 100 (yeh number 100 hi hai), lekin agar aap iska type of check karenge to wo string ban gya hai
// string ban ne se kya hota hai iske pas additional properties bhi aa jati hai, jaise string ban hi gya hai,
// to hume pata hai string k pass .length property bhi hai, .concat bhi hai, jo bhi apko chahiye, as follows

console.log(balance.toString().length);
// o/p - 3, as 100 k andar three characters hai

console.log(balance.toFixed);
// toFixed k andar apko ek property bhi deni hoti hai jo ki hoti hai number, to jab humne iske andar bola number 2 do
// humne as follows

console.log(balance.toFixed(2));
// o/p - 100.00
// especially jab hum ecommerce application banayege wha p kai bar calculation hota hai, multiplication hota hai
// apne gst calculate kara to precision value kuch jada hi badi ho jati hai, ab obvious si baat hai client ko utna
// precision value dekhne ka adat nahi hota hai to uss case me aap toFixed humesha use kariye, especially jab aap
// ecommerce application bana rahe hai, we can use 1 also as follows

console.log(balance.toFixed(1));
// o/p - 100.0

// aisa nahi hai isi tareh se hai, aap precision value ko aur bhi tareh se use kar sakte hai, yeh toFixed hua

const otherNumber = 23.8966

// ab kyuki yeh number hai to yahan pe aap aur properties ko bhi use kar sakte hai, jasie apne kaha

console.log(otherNumber.toPrecision());

// hover over green paranthesis i.e. after toPrecision, is shows values hum 1 and 21 k beech mei hi de sakte hai
// is shows returns a string yeh bahut important hai

// precision kitna chahiye, suppose kare hum isko value dete hai 3 as follows
console.log(otherNumber.toPrecision(3));

