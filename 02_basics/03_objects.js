// OBJECTS

// objects ko declare karne k 2 tarike hai, ek hai literal ki tareh , ek hai constructor ki tareh

// ek concept ata hai single ton
// single ton ka simple sa matlab hota hai ki koi bhi constructor se jab aap banate hai to single ton
// ek object banta hai yani ki yeh apne tareh ka ek hi object hai

// lekin jab aap dusri tareh se banate hai to wo single ton nahi hota uske multiple instances ban jate hai
// ab yeh single ton kya hai kyu hai yeh abhi jaan ne ki need nahi hai, aap se agar interview mei pocha jaye
// to sirf itna dhyan rakhna ki jab bhi hum actually mei literals ki tareh declare karte hai (jo abhi sir sikhayenge)
// to single ton nahi banta hai

// constructor se agar banega to haa humesha single ton banega , bas itna dhyan rakho , aage jaise seekhenge aur samajh
// aa jayega

// to yeh jo cheej approach hai hum yahan pe baat kar rahe hai object literals ki

// object literals

// theek hai yeh object ko declare karne ka tarika hai, dono tarike se object hi banta hai, as such koi
// performance improvement etc kuch nahi ata bas jo antar padta hai wo single ton ka padta hai

// to abhi hum ek object declare karte hai user naam ka, usme kuch values dete hai as follows


// const Jsuser = {}
// that's it isse jada kuch nahi hai object k andar

// hum object.create karke bhi b=object bana sakte hai as follows

Object.create
// yeh jo tarika hai object.create, isi ko bola jata hai constructor method k through aur isi k andar
// single ton banta hai, iske bare mei baad mei baat hogi

// hum jiski baat kar rahe hai wo object literals ki baat kar rahe hai

// object literals
// const Jsuser = {}
// aur yeh jo curly braces hai yehi hai object, abhi yeh empty object hai but iske andar kuch values daal denge
// to usko access kar sakte hai

const Jsuser = {
    name: "Hitesh"
}

// yahan object k andar keys aur values ka chakkar hota hai jaise agar aap koi array declare karte hai
// jaise myArray

myArray = ["h", "i"]