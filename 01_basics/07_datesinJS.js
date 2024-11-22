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

// let myCreatedDate = new Date(2023, 0, 23)
// apa isme ( new Date(2023, 0, 23) ) aur bhi values de sakte hai to wo values aage jake time, hour, minutes
// aur bhi jada convert ho jati hai jaise apne decide kiya hume chahiye 5 uske baad 3, to depend aap kitna
// format wha pe le rahe hai to uss hisab se declare ho jata hai and hum is bar karte hai to locale string

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)

// console.log(myCreatedDate.toLocaleString());

// o/p 1/23/2023, 5:03:00 AM
// to hume iss tareh date time values mil jati hai

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// sirf itna hi nahi aap dates ko aur specific format mei bhi input le sakte hai
// kai bar hume MM-DD-YY or YY-DD-MM iss tareh k formats dekhne hote hai , so we can insert such formats

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

// o/p 1/14/2023, 12:00:00 AM , (month aa gaya january) , jab hum single digit mei likhte hai (2023, 0, 23) to count
// array hai to zero se start hota hai, lekin jab aap DD-MM-YY karte hai to apka month first se start hota hai
 
// Yeh (above) ho gaya YY-MM-DD, India mei hum iss syntax ko follow nahi karte
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ek aur syntax, India mei hum MM-DD-YY ko follow karte hai

// let myCreatedDate = new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleString());

// o/p 1/14/2023, 12:00:00 AM

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myCreatedDate = new Date("01-14-2023")

// itna hi nahi humare pas time stamps bhi hote hai date k andar
// yeh exact time stamp ka value dekhne mei especially jab hum quizes design karte hai, polls design karte hai,
// kisne fastest diya hai usko winner banana hai wha kaam ata hai


// hum new likh k bhi kar sakte hai , waise hum direct Date.now() bhi kar sakte hai


let myTimeStamp = Date.now()

// console.log(myTimeStamp);

// o/p 1732290186868, yeh log number ofcourse si baat hai millisecond hai, wo hi jo date humne padhi thi
// 1st january 1970 waha se leke ab tak ka milli second value hai, ab is milli second value se koi bhi value
// nikalna difficult ho jata hai kai bar, jaise suppose above humne date de diya myCreatedDate, ab isse hume nikalna hai
// millisecond nikalna hai, kyuki jab hum rooms book karenge jaise hotel app, ya koi poll bana rahe hai to wha pe kai
// bar dates ko compare karna padta hai, to uss case mei kya kar sakte hai, humne run karwaya myCreatedDate

// console.log(myCreatedDate);
// o/p 2023-01-14T00:00:00.000Z, abhi hum just above ko run karte hai to hume exact date milti hai
// yeh humne dekh liya tha, lekin kyuki date object hai to aap isko bol sakte hai .getTime, yeh .getTime
// kya karega apne jo bhi date declare kari thi theek hai but hume kya chahiye wo jo 1st January se wo value chahiye exact
// (1st January 1970) jo hume mila isi tareh ka (1732290923901) , isi tareh ka value aap le sakte hai isse

// console.log(myCreatedDate.getTime());

// o/p 1673654400000, to humare pas 2 values hai milli second mei, inko hum apas mei easily compare kar sakte hai
// isi tareh se bade projects banaye jate hai

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ab isko seconds mei convert karna ho to wo bhi hum kar sakte hai as follows

// console.log(Date.now());

// hume pata hai yeh (above) kya value dega exact abhi ki date dega, milliseconds mei
// o/p 1732292961037
// to convert it into seconds we divide it by 1000 as follows

// console.log(Date.now()/1000);

// o/p 1732293083.2
// problem h ki after dividing by 1000 decimal values bhi aa jati hai, to isko avoid karne k liye we use 
// Math.round or Math.floor

// console.log(Math.floor(Date.now()/1000));

// o/p 1732293194, (yeh o/p 1 January 1970 se hai in seconds)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let newDate = new Date()
// ab kyuki date apne aap mei ek object hai lekin agar aap isko as it is print karte hai to newDate
// apko koi khaas information nahi deta hai , apko usko kafi calculate karna padta hai, convert karna
// padta hai as o/p as follows

console.log(newDate);
// o/p 2024-11-22T16:52:00.382Z, lekin hume kuch aur information isse extract karni hai, suppose kariye hume
// isko pora string mei convert hi nahi karna hai, hume to sirf usme se month jaan na hai ya year jaan na
// to aap kar sakte hai easily, iske liye humare pas kuch methods hai wo aap iske aage dot laga k dekh sakte hai

console.log(newDate.getMonth());

//  o/p 10 , as JS mei month 0 se start hote hai, (yeh November mei likha tha means o/p is November which in JS is 10)
// (sir ka newDate ka o/p 2023-03-01T12... aya , so newDate.getMonth() ka o/p 2 aya means third month) 

console.log(newDate.getDay());
// o/p 5 means Friday (start Monday se ho rha hai)

console.log(newDate.getMonth() + 1);
// o/p 11, above syntax taki end user confuse na ho as November ki value 11 ayegi + 1 kar diya
// means end user ko month ki exact value mile according to calendar

// ab in syntax ko , in strings ko use karke kai bar complex date print karane k programs etc online milte hai
// practice karte hai log suppose kare apko full time likhna hai to aap iss format mei likhiye to waha pe log
// string interpolation lete hai means back ticks, uske andar values insert karte hai ${}

// ``


