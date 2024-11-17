const score = 400

// console.log(score);

// o/p - 400


// browser console mei JS ne automatically detect kiya ki yeh jo score hai iska type hona chahiye number
// lekin kai bar aap explicitly bhi define kar sakte ki hume number hi datatype chahiye as follows

// suppose aap koi banking application bana rahe hai that's why balance as follows
// bahut sare JS mei humko objects milte hai jaise String milta hai, Number bhi milta hai, 
// aur aap dedicatedly define kar sakte hai ki hume number hi chahiye, ab 100% guarantee hai ki yeh number
// hi hoga, line number 1 mei bhi hai, but following is new way to declare a number

const balance = new Number(100)

// console.log(balance);

// o/p - [Number: 100]

// o/p explanation - line 1 ne bola 400 hai kyuki automatically define hua ki yeh number hai, [Number: 100] ne specifically
// cast kiya hai ki number hai yeh, to yeh hi difference ata hai jab aap specially bolte hai ki new object mei define
// kar rha ho jo Number type ka hai

// copy paste lin 14, 15 in browser console

// number methods as follows

// console.log(balance.toString());

// o/p - 100 (yeh number 100 hi hai), lekin agar aap iska type of check karenge to wo string ban gya hai
// string ban ne se kya hota hai iske pas additional properties bhi aa jati hai, jaise string ban hi gya hai,
// to hume pata hai string k pass .length property bhi hai, .concat bhi hai, jo bhi apko chahiye, as follows

// console.log(balance.toString().length);

// o/p - 3, as 100 k andar three characters hai

// console.log(balance.toFixed);

// toFixed k andar apko ek property bhi deni hoti hai jo ki hoti hai number, to jab humne iske andar bola number 2 do
// humne as follows

// console.log(balance.toFixed(2));

// o/p - 100.00
// especially jab hum ecommerce application banayege wha p kai bar calculation hota hai, multiplication hota hai
// apne gst calculate kara to precision value kuch jada hi badi ho jati hai, ab obvious si baat hai client ko utna
// precision value dekhne ka adat nahi hota hai to uss case me aap toFixed humesha use kariye, especially jab aap
// ecommerce application bana rahe hai, we can use 1 also as follows

// console.log(balance.toFixed(1));

// o/p - 100.0

// aisa nahi hai isi tareh se hai, aap precision value ko aur bhi tareh se use kar sakte hai, yeh toFixed hua

// const otherNumber = 23.8966

// ab kyuki yeh number hai to yahan pe aap aur properties ko bhi use kar sakte hai, jasie apne kaha as follows
// other methods as follows

// console.log(otherNumber.toPrecision());

// hover over green paranthesis i.e. after toPrecision, is shows values hum 1 and 21 k beech mei hi de sakte hai
// is shows returns a string yeh bahut important hai

// precision kitna chahiye, suppose kare hum isko value dete hai 3 as follows

// console.log(otherNumber.toPrecision(3));

// o/p - 23.9

// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3));
// o/p - 124
// yaha pe interview mei log galti karte hai , explanation as follows
// jo matlab hai precision ka ki hume precise value chahiye lekin hume kitni value pe focus karna hai
// to precision apne jaise hi bola 3, to isne kaha theek hai yaha pe three values hai (means 123.8966 mei three values means 123)
// mai inhi pe precision dunga, kyuki yahan pe decimal k baad 8 tha to maine usko round off kar diya

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3));

// o/p - 1.12e+3, means yeh rahi apki precision value i.e. 1.12 and baki exponential mei deta hu i.e. e+3
// to bahut hi dhyan se use karna precision ko, use karne k liye apko pata hona chahiye ki theek hai
// priority jo mil rahi hai wo decimal k phele mil rahi hai, decimal k baad bhi priority mil sakti hai,
// lekin apko calculation aur apki value p dependency honi chahiye ki haa mujhe pata hai 100% value 3 hi
// ayegi decimal se phele aur uske baad ka precision mai yahan pe dekh rha hu

// console.log(otherNumber.toPrecision(4));

// o/p - 123.9

const hundreds = 1000000

// yeh zeros kai bar calculate karna ya dekhna bahut hi difficult hota hai, to JS mei humko kuch methods milte hai
// jisse aap atleast unka representation easy kar sakte hai as follows

// console.log(hundreds.toLocaleString());

// o/p - 1,000,000
// yeh comas by default US standards k hisab se hote hai like 100 thousand, 1000 thousand
// lekin hum Indian k hisab se .toLocalString paranthesis mei en-IN likh sakte hai

// console.log(hundreds.toLocaleString('en-IN'));

// o/p - 10,00,000 now default value se change ho gya hai and Indian standards k hisab se comas aa gaye
// for those who want to do competitive programming or DSA in future, to usme ek concept hota hai max value
// aur min value ka, ki kitni maximum value numbers mei de sakte hai, BigInt ki hum baat nahi kar rahe hai
// in browser console type Number. then suggestions will come, Number.MAX_VALUE means apko pata hai yeh hi maximum value
// ho sakti JS k andar number ki, similarly for Number.MIN_VALUE, yeh minimum value ho sakti JS k andar
// iske alawa apko Number.MAX_SAFE_INTEGER bhi diya jata hai ki yeh safe integer hai itna hi value mai store kar sakta hu

// yeh ho gya numbers k bare mei, ab hum maths k bare mei baat karte hai

// +++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++
// maths library JS k sath ati hai by default

console.log(Math);
// M capital hai Math ka kyuki yeh bhi ek default hi hai JS k andar jaise number hai waise hi same
// o/p - Object [Math] {}, means yeh apne aap mei ek object hai jiske andar bahut sari properties hai
// problem yeh hai ki yahan pe jab hum isko console.log(Math) ko run karte hai tab humare pas itni
// detailed values nahi ati hai, lekin yeh hi console.log(Math) jab hum browser console mei run karte hai
// tab hume kafi values mil jati hai, (dropdown Math, jo bhi objects k andar humko values mili hai)
// kuch values hume direct mili hai jaise .PI, hume pata hai yeh sari properties hai to . (dot) likh k
// hum direct access kar sakte hai jaise humne length kiya tha

// jo jadatar use karenge are as follows taki mdn mei nahi jana pade

// console.log(Math.abs());

// abs hai absolute value, kai bar aisi situations ayegi jaha pe apke pas -ve values hai jaise -4
// apko unka just sign change karna hai plus mei karna hai, ab sign change karne ka matlab yeh nahi hai
// ki + - mei ho jata hai and - + mei aisa nahi hota hai, sirf minus values positive ho jati hai yeh hi
// absolute hota hai as follows

console.log(Math.abs(-4));
// o/p is 4

console.log(Math.abs(4));
// o/p is 4, means positive +ve hi rehta hai lekin , -ve positive ban jata hai

console.log(Math.round(4.3));
// function hai abhi humne dekha property nahi hai function hai browser console mei
// round k andar kya hota hai jaise apke pas value hai 4.3, ab aap chahte hai ki mujhe decimals
// k andar kaam mei nahi lena hai to 4.3 ka mujhe round off karke de do, to jaise hi aap round off karenge
// to 4.3 ka 4 roundn off kar diya i.e. above ka o/p is 4

console.log(Math.round(4.6));
// o/p is 5

// lekin aap chahte hai ki mujhe control karna hai ki value upper wali choose hogi ya lower wali choose hogi
// to bhi apko do method milte hai, first method milta hai ceil, ceiling means top to obvious baat hai
// top wale number choose karega as follows

console.log(Math.ceil(4.2));
// o/p is 5, ceiling means jara sa bhi 4 se jada hua to upper value ayegi o/p mei

// floor is opposite of ceil as follows
console.log(Math.floor(4.9));
// o/p is 4
// sqrt means square root, pow means kisi ki power apko calculate karni hai