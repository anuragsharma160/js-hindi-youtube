// Dates

let myDate = new Date()
// yeh bana diya apne date ka object uska ek instance

// console.log(myDate);

// o/p - 2024-11-22T08:39:07.798Z

// to yahan pe jo cases ate hai ki kis tareh aap inko aur conversion mei leke ate hai
// we try to convert date into string

// console.log(myDate.toString());

// o/p - Fri Nov 22 2024 08:39:07 GMT+0000 (Coordinated Universal Time)

// now previous o/p se sahi hai
// kuch aur methods hai jinhe hume try karna hai -- to date string, to iso string, to json, to locale date string
// to local string

// console.log(myDate.toDateString());

// o/p - Fri Nov 22 2024

// console.log(myDate.toLocaleDateString());

// o/p - 11/22/2024
// har ek date k method alag tareh se date ka o/p denge

// console.log(typeof myDate);

// o/p object
// in line 3 humne ek object create kara hai Date(), uska instance myDate hai
// to date ek object hai JS k anadr

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// if hume koi specific date hi declare karni hai as follows
//  let myCreatedDate = 
// to isko (above) aap kaise declare kar sakte hai obvious si baat hai apne new keyword likh k
// apne Date() likha as follows

// let myCreatedDate = new Date()
// yeh (above) to aa gayi apki abhi isi instance ki date along with time of course (yeh above line 35 likhte waqt ki date)
// but aap pas kar sakte hai aur bhi value jaise 2023, 0, 23 (arbitrary date) as follows

// let myCreatedDate = new Date(2023, 0, 23)

// to pata karte hai kya print hua hai and konsi date ayegi

// console.log(myCreatedDate);

// o/p 2023-01-23T00:00:00.000Z
// date declare hui hai iss syntax se but konsi hui hai yeh pata karna difficult hai from o/p
// so we try method to date string as follows

// console.log(myCreatedDate.toDateString());

// o/p Mon Jan 23 2023
// notice month zero se start hote hai JS k andar (2023, 0, 23), Monday is method ne automatically bata diya hai

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// itna hi nahi hum date ko aur bhi tarike se declare kar sakte hai

let myCreatedDate = new Date(2023, 0, 23)
