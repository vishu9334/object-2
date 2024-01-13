// singleton 

// const tinderUser = new Object()  // this is singleton object 
// const tinderUser1 = {}          // This is not a singleton object but both are object.
// console.log(tinderUser);
// console.log(tinderUser1);

// const tinderUser = new Object() 
const tinderUser = {}   

// tinderUser.id = "123abc"
// tinderUser.name = "sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email: "sammy@gmail.com",
//     fullname: {
//         userfullname:{
//             firstname:"vishal",
//             lastname:"kumar"

//         }
//     }
    
// }
// console.log(regularUser.fullname.userfullname.firstname, 
    // regularUser.fullname.userfullname.lastname);
   
// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({},obj1, obj2)
// const obj3 ={...obj1, ...obj2}  //tjis syntx is very easy as to compair to before syntx. 
// console.log(obj3);

const users = [
    {
        id: 1, 
        email: "v@gmail.com"
    },
    {
        id: 1, 
        email: "v@gmail.com"
    },
    {
        id: 1, 
        email: "v@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogged'));