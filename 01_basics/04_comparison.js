// console.log(2 > 1);
// above ka answer boolean values mei ayega
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 > 1);
// console.log(2 == 1);
// console.log(2 != 1); 
// above means not equal ka comparison

// aur string ke andar bhi same hai, lekin problem tab ati hai jab hum same datatype ko compare
// nahi karte hai as follows

// console.log("2" > 1);
// console.log("02" > 1);

// above both ka o/p true ayega because automatic javascript ne 2 and 02 ko convert kar diya number mei
// problem yeh hai ki jab iss tarah ka conversion hota hai to apka jo comparison hai wo kai bar
// predictable result nahi deta hai. To jab bhi aap compare karein kisi bhi values ko to yeh jarur
// sunishcit karein ki ki un dono ka datatype same ho. Typescript hume allow hi nahi karta ki hum do
// different datatype ko compare karein

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// above o/p false false true as null means empty. Third mei value convert hoti hai, to yeh true hai
// kyuki null >= hai yaha pe value conversion ka problem aa jata hai, ab esa sahi mei nahi hai ki
// value > hai ya = hai but wo hi Sir jo batana cha rahe hai predictable jo result hai wo nahi ate

// The reason is that an equality check == and comparisons > < >= <= work differently
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false

// same comparison for zero as follows

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// o/p of above all three is false

// Strict check as follows
// ===
// triple equal na keval apki values ko check karta hai balki values ko strictly check karta hai
// yani uski datatype ko bhi check karta hai , eg as follows

console.log("2" == 2);
// agar aap isse check karenge to wo bolega haan sahi hai kyuki yahan pe conversion hone lag jata hai
// lekin jaise hi triple = se check karenge tab yeh conversion nahi hota ab wo datatype bhi check karega
// kya yeh string hai "2" , kya yeh number hai 2 , conversion karu nahi karu, yeh bolega conversion
// nahi karna hai kyuki === haito yeh bolega yeh dono "2" and 2 same hai hi nahi kyuki inka datatype
// hi alag hai as follows

console.log("2" === 2);

// Summary -- yeh jo basic conversion hai line 1 to 8 , yaha tak koi problem nahi hai as both side
// same datatype hai i.e. number to wo sabse best conversion hai. Jaise hi hum line 13 and 14 mei
//  ate hai to yahan fasne k chance hote as both side different datatype hai
// Similarly null and undefined wale comparisons hume confusion mei daal sakte hai, that's why
// most cases mei hum null and undefined wale comparisons ko avoid hi karte hai
// clean code ka hi sabse jada value hai 



