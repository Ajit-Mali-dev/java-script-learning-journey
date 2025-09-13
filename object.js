let userInfo = {
        name1: "Ajeet",
        No : 1234567890,
        Address2 : "Sirohi",
        State2 : "Rajasthan"     
}

// console.log(userInfo.Address);  // By this method we can access keys and its values in object

// console.log(userInfo["Address"]);  // By this method we can also access keys and its values in object

// This both methods gives same result


let userInfo2 = {
        name: "Himanshu",
        mobileNo : 9876543210,
        Address : "Sirohi",
        State : "Rajasthan"     
}

let userInformation = Object.assign({}, userInfo, userInfo2)
console.log(userInformation);  /*  Assign () methpods joins two or more array and resturn a new array . It has target and source. It works the same way as spread it also 
overwrittes the copy keys . The earlier will be overwritten by last one. It can work everwhere.*/

let user = {...userInfo, ...userInfo2} // this spread the objects and return into a new object .  Important : It overwrittes the same keys , the last one will overwrite the earlier one.
console.log(user);


   // This is used to join two or more arrays .
// console.log(Object.values(userInfo)) // Get all values from object
// console.log(Object.keys(userInfo2)); // Get all keys from objects
// console.log(Object.entries(userInfo2)); // Get all entries , Each one is  sepreted object. 





