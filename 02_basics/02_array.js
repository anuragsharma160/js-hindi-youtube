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

// 11:45