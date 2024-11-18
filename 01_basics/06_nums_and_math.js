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

// console.log(Math);

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

// console.log(Math.abs(-4));

// o/p is 4

// console.log(Math.abs(4));

// o/p is 4, means positive +ve hi rehta hai lekin , -ve positive ban jata hai

// console.log(Math.round(4.3));

// function hai abhi humne dekha property nahi hai function hai browser console mei
// round k andar kya hota hai jaise apke pas value hai 4.3, ab aap chahte hai ki mujhe decimals
// k andar kaam mei nahi lena hai to 4.3 ka mujhe round off karke de do, to jaise hi aap round off karenge
// to 4.3 ka 4 roundn off kar diya i.e. above ka o/p is 4

// console.log(Math.round(4.6));

// o/p is 5

// lekin aap chahte hai ki mujhe control karna hai ki value upper wali choose hogi ya lower wali choose hogi
// to bhi apko do method milte hai, first method milta hai ceil, ceiling means top to obvious baat hai
// top wale number choose karega as follows

// console.log(Math.ceil(4.2));

// o/p is 5, ceiling means jara sa bhi 4 se jada hua to upper value ayegi o/p mei

// floor is opposite of ceil as follows

// console.log(Math.floor(4.9));

// o/p is 4
// sqrt means square root, pow means kisi ki power apko calculate karni hai

// console.log(Math.min(4, 3, 6, 8));

// agar apko find karna hai ki array k andar sabse lowest value konsa hai
// o/p 3

// console.log(Math.max(4,3,6,8));

// o/p 8
// .max is opposite of .min

// now math library use kaha ati hai aur hum ise kahan use karne wale hai
// hum ise use karne wale hai Math.random pe

console.log(Math.random());

// o/p har bar above ka ayega in between 0 and 1 and har bar different o/p ayega, 0 bhi ho sakta hai o/p
// and 1 bhi ho sakta hai o/p
// ab humare pas jo questions ayenge ya humare pas jo problem statement hoga usme apko kuch range se kuch range
// k beech mei values hogi, jaise aap dice game bana rahe hai to apko pata hai 1 se 6 k beech mei hi mujhe values
// chahiye ya fir koi aur game bana rahe hai to 1 se leke 10 k beech mei hi mujhe value chahiye, ab agar Math.random ki
// value 0 aur 1 k beech mei ati hai mostly decimal hi ati hai to kya ho agar hum usko 10 se multiply kar de as follows

// console.log(Math.random()*10);

// to wo 10 se multiply karke o/p dega, means 1 digit left mei shift ho jayegi, lekin kyuki sir ne bataya value jo
// hai 0 bhi ho sakti hai kyuki value kya aa sakti hai 0.041 o/p mei yeh bhi to ho sakta hai 0 and 1 k beech mei
// to uss case ko avoid karne k liye hum kya kar sakte hai jadatar iske andar ek plus 1 kar dete hai as follows
// ki uss case ko hum avoid kar de ki 0.04 bhi to ho sakta hai usko karenge to problem ho jayega

console.log(Math.random()*10 + 1);

// to abhi jo o/p value hai uski guarantee hai ki yeh 3 aya (means 3.445 aya o/p mei) to guarantee hai ki
// minimum jo value hai wo 1 ayegi 0 to nahi ayegi, theek hai itna case ho gya humare pass

// ab kya karte hai ki hum usually jo kya hota hai ki yeh jo values hai ki iss tarah se 1 add karenge (plus 1 kiya)
// fir 10 mutiply as above for BODMAS etc wo kafi problem ho jayega to exact same ko avoid karne k liye hum kya karte
// hai phele is Math.random ko hum multiply kar dete hai 10 se aur usko wrap kar diya bracket k andar

// console.log((Math.random()*10));

// ab jo rsult aya usme kar do plus 1 as follows

// console.log((Math.random()*10)  + 1);
// console.log((Math.random()*10)  + 1);

// to ab hume pata hai guaranteed hai 100% ki jo values hogi wo confirm hogi aur hume Maths k bare mei ki
// konsa wala first execute hoga konsa wala second execute hoga yeh bhi pata karne ki need nahi hai
// to abhi guarantee hai o/p aya 6 aya 4 aya (means 6.something and 4.something) lekin yeh values to kafi jada
// ja rahi hai 0 and 9 k beech mei , to apko kahan se kahan tak value chahiye uspe depend karega ki aap kisse isko
// (means 10 se multiply kiya) multiply kar rahe hai

// chota sa trick min aur max define karne ka and ek formula as follows

const min = 10
const max = 20
// to obvious si baat hai define ho gya hai ki hume chahiye values 10 aur 20 k beech mei, jo concept humne upar
// seekha hai line number 218 and line number 219 mei exact same concept use hota hai lekin iska ek
// generic syntax formula ban jata hai as follows
// ek cheej aur yahan o/p mei jo values hai (o/p of line 218 and line 219) wo hume chahiye ki sabse choti aye
// to kai bar isko (means line 219 ko) Math.floor k saath bhi wrap kiya jata hai as follows

console.log(Math.floor(Math.random()*10)  + 1);

// to Math.floor ka itna koi difference nahi ayega as o/p of above is 8, and o/p changes everytime we run this command
// to floor basically usko round off kar deta hai lowest values pe to hum dekh rahe hai har bar values aa rahi hai
// (iss floor command ko bar bar run karne par) to agar ek hi number chahiye to wo number k regarding hai

// line 237 ko hum wapas se use karenge, to abhi humne bola Math.random as follows

// Math.random()

// ab kya dekha humne yahan pe line 237 mei ki Math.random ko hum multiply karte hai (line 237 mei Math.random ko 10
// se multiply kiya) ki itna to value chahiye hi chahiye hume, ab uske liye hum kya karte hai ek chota sa yahan pe
// formula seekh lete hai isko (Math.random() ko) multiply karna hai apko, kisse multiply karna hai, jaisa ki humne
// dekha ki abhi 10 se kiya Math.random() ko line 237 mei, to abhi ek formula hai max - min aur usko aap plus kar 
// dijiye one se taki zero values na aye as follows

// Math.random() * (max - min + 1)

// aur kyuki apko jo bhi minimum value chahiye to obvious si baat hai abhi to humne kya intejam kara ki zero ko avoid
// kara hai iss first 1 se (i.e. (max - min + 1) wale 1 se), but abhi hum khe rahe hai ki nahi hume to sirf zero se kaam
// nahi chalega , hume minimum 10 value to do hi do (line 229) isse upar hi do (min = 10 se upar) , to aap kya karo
// yahan pe jo bhi aapke pas result aya hai uske andar aap add kar do + minimum value ko as follows

// Math.random() * (max - min + 1) + min

// lekin abhi humne seekha hai ki + min aise add kar doge (as in line 260) to kaam nahi hoga kyuki isko (line260) ko
// humne wrap up kiya as follows

// (Math.random() * (max - min + 1) + min)

// aur bola console.log

// console.log(Math.random() * (max - min + 1) + min)

// ab yahan pe final number ayega o/p mei to aap dekhenge 5.9 to yeh to chahiye hi nahi , abhi upar dekha o/p mei ki ek
// hi digit chahiye (i.e. 2) to kya karo Math.floor kar do to line 268 ko Math.floor mei wrap kar diya as follows

console.log(Math.floor(Math.random() * (max - min + 1)))

// ab Math.floor karne se kya hoga ki theek hai guarantee ho gayi ki abhi values aa rahi hai, but values dekhiye 2
// bhi aa rha hai, 1 bhi aa rha hai, 6 bhi aa rha hai o/p mei, aur minimum kitna chahiye hume 10 to chahiye hi chahiye
// (line 229) to kya karo simple sa hai yahan par aao (line 274 mei aao) aur usko kar do + min as follows

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// to minimun (line 229 const min = 10) humne usme add hi kar diya hai
// to ab kya value ayi har bar o/p mei 14 , 12 aur 19
// toda sa isko aur janiyega ki 1st, 2nd step mei kya ho rha hai

// summary explanation- math.random (line 189) apko 0 aur 1 k andar value deta hai, to values humesha 0.1 , 0.2 , 0.4 bhi ho sakti hai
// ab problem kya ata hai jab aap usko 10 se multiply karte hai (line 205) means humne values ko shift to kar diya left mei
// (10 se multiply k baad left mei shift hoti hai 1st digit) , lekin ho sata hai kai bar values aye 0.1 to math.floor jo hai
// wo apko value de dega zero , us case ko avoid karne k liye sir ne usme 1 add kar diya (line 237) kyuki humara jo 
// minimum case hai ki hume value chahiye 1 se to upar chahiye aage kitna bhi ho sakta hai to uss case mei humne isko add kar diya
// to yeh hume jo values dega wo 1 se leke 9 k beech mei dega,
// lekin kai bar case ata hai ki apko min bhi define karna hai and max bhi define karna hai (line 229 and 230)
// to uss case mei humne kya kara ki math.random ka to use kara hi kara (line 280)  plus humne usko multiply
// seedha 10 se karne ki bajai humne kya kara (max - min) taki humare pas wo range aa jaye (line 229 and 230) ki iss range k andar chahiye hume
// aur plus 1 karne k liye (max - min + 1) taki 0 case avoid kar du, uske bad humne kaha ki theek hai yeh value to abhi bhi 
// wo hi aa rahi hai jo upar thi (line 237) to uss case ko avoid karne k liye ki minimum to itna chahiye hi , humne uske andar
// ek minimum value add kar di (min in last of line 280)