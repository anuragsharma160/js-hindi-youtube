const marvel_heros =["thor", "Ironman", "spiderman"]
const dc_heros =["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

// o/p [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// log assume karte hai ki yeh dono arrays merge ho jayenge but actually yeh merge hote nahi hai

// yahan pe problem ayi hai ki array k andar array aa gaya jo ki hum iss situation mei nahi chahte the
// In JS, arrays kisi bhi type ka entry data le lete hai, jaise jaruri nahi tha yahan hum sari values string hi de
// hum chahe to booleans bhi de sakte hai,object bhi de sakte hai, to isi tareh humari baat ko prove karne
// k liye ki array koi bhi data le leta hai , isne o/p mei array (dc_heros) ko bhi as a data le liya hai
// to array [ 'superman', 'flash', 'batman' ] o/p mei ek single element hai

// means o/p [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] mei 1st element is "thor",
// 2nd element is "Ironman", 3rd element is "spiderman", 4th element is [ 'superman', 'flash', 'batman' ]
// ab 4th element k andar aur  values/elements hai wo alag baat hai

// jaise hume iski koi bhi value access karni hai, we do so by using indexing as follows
// console.log(marvel_heros[3]);
// and 3rd index element apne aap mei ek array hai, and uss 3rd element k 1st index element ko
// hume access karna hai then we do so as follows

// console.log(marvel_heros[3][1]);
// o/p flash

// ================================================================================================================

// actually mei ek aur method hota hai, above humne kiya push but hum concat bhi use kar sakte the as follows

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// o/p is [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// push existing array pe hi push karta hai lekin concat return karta hai ek naya array that's why push
// method k liye new variable/const nahi liya but concat k liye new const allHeros liya hai otherwise concat
// ka o/p nahi ayega new const/variable nahi lenge to

// so by using concat humne dono arrays ko merge kiya hai properly sirf ek naya element/array add nahi kar diya hai
// jiske andar elements hai jaise push mei kiya tha

// =============================================================================================================

// lekin isko agar karna hai to iska ek aur easy method hai jisme hum use karte hai spread operator

// const all_new_heros

// ab hume 2 arrays ko spread karna hai

const all_new_heros =[...marvel_heros, ...dc_heros]
// jaise hi hume ... lagaya to ab wo array nahi rha, uske ek ek element individual ho gaye hai
// to ab humare pas jo values ayegi all_new _heros k andar wo spread out values ayegi yani ki ek ek element hi
// milega

// console.log(all_new_heros);
// o/p [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// same kaam ho gya

// =============================================================================================================

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// array k andar k andar hai to iss situation ko handle karne k liye as follows

// const real_another_array =

// iske andar koi bhi array jo humne liya hai jaise humne another_array liya hai isko aap flat kar sakte hai as flollows

// const real_another_array = another_array.flat()
// yeh kya keh rha hai ki apko chahiye ek single ek array, and uske andar array k andar array k andar array hai
// apko yeh syntax pasand nahi aa rha , sabko ek hi array mei de du kya , ha de dijiye

// iske andar apko numbers dene hote hai apko kitni depth tak hum solve kare , ek depth tak, do depth tak
// teen depth tak, humare another_array mei ek depth hai [4, 5, 6] do depth hai [6, 7, [4, 5]]
// simple hack hai hum yaha Infininty bhi likh sakte hai , then flat jitna depth hoga apne aap dekh lega
// halaki aisa nahi karna chahiye exact depth hi deni chahiye

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// o/p [
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]

// ======================================================================================================

// ek aur cheej jo kaam ayegi especially jab hum data scrapping kar rahe hai, to jab bhi hum data select
// karte hai kisi bhi webpage se to wo kai bar alag format mei ata hai nodelist mei ata hai, ya objects mei ata hai
// ya fir string mei aya but chahiye to array to array k upar hi loop kar sakte hai , to wahan pe aap array ko
// use kar sakte hai iss tareh se as follows
// actually mei aap poch bhi sakte hai aur usko convert bhi kar sakte hai jaise suppose kariye hum pochte hai
// is array as follows

// Array.isArray()
// hum iss array k andar ek hitesh naam ki string de dete hai

// Array.isArray("Hitesh")
// isko hum console log karke dekh lete hai

console.log(Array.isArray("Hitesh"))
// to phele hum poch rahe hai isse question ki batao yeh jo cheej hai aapke pas yeh array hai kya
// o/p false, means yeh array nahi hai

// lekin agar convert karna hota to hum .isArray ki jagah likh dete .from , means hum isko bana dete hai
// ek array .from se as follows

console.log(Array.from("Hitesh"))
// o/p [ 'H', 'i', 't', 'e', 's', 'h' ]
// to isne pora hi array bana diya hai, obvious si baat hai jo bhi values aap denge usko yeh array k andar convert
// kar dega, aap chahe to objects bhi de sakte hai, strings bhi de sakte hai , to jaise bhi wo array convert kar payega
// wo array bana dega iss tareh se

// hum isme aur bhi values de sakte hai , jaise humne diya isko ek object {} as follows

// console.log(Array.from({}))

// and humne object {} k andar likha name: "hitesh"

console.log(Array.from({name: "hitesh"}))
// hitesh string mei diya , aur bhi values de sakte hai
// o/p is []
// to isne o/p mei diya ek empty array, kyuki isko {name: "hitesh"} directly yeh convert nahi kar paa raha

// to apko bolna padega, phele actually mei dena padega ki achha keys ka mai array banau ya fir mai sirf
// iske values ka array banau (key value pair) , agar yeh nahi bana payega to humesha kya dega 
// empty array dega []
// to iska console.log(Array.from({name: "hitesh"})) dhayan rakhna , yeh interesting case hai interviews k liye
// 

// =============================================================================================

// jaise suppose kariye apke pas kuch values hai

let score1 = 100
let score2 = 200
let score3 = 300

// aisi situations bhi ayegi apke pas mei ki apke pas multiple variables hai ya fir arrays hai unko bhi
// apko array mei convert karna hai to bhi aap easily kar sakte hai
// instead .from ki jagah .of kar sakte hai

// console.log(Array.of);
// jaise hi hum .of karenge to yeh kya karta hai -- returns a new array from a set of elements
// ab set of elements kuch bhi ho sakte hai variables bhi ho sakte hai, arrays bhi ho sakte hai
// to iske andar jitne bhi elements hai jin ko convert karna de dijiye


console.log(Array.of(score1, score2, score3));

// o/p [ 100, 200, 300 ]

// Read more about .isArray, .from and .of


