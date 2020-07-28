// 1. variables
//3 methods of declaration var - can override the value
//let - can be change by not redeclaring but re-assigning, 
//const - cannot be change at all

//const Name = "Pedro";
//Name = "Anna";
//console.log(Name);
//----------------------------------------------------------
// 2. data types
//String, Numbers, Boolean, null, undefined
// const Name = "Pedro";
// const Age = 19;
// const Rating = 49.3;
// const isComplete = true;
// const Val = null;
// const unk = undefined;
// let Library;
// Library = "Manila Library";

// console.log(typeof Library);
//----------------------------------------------------------
// 3. string manipulation
// const Name = "Pedro";
// const Age = 19;
//let String = "My name is "+Name+" and my age is "+Age;


//ES6 template strings
// let String = `My name is ${Name} and my age is ${Age}`;
// console.log(Name.toLocaleUpperCase(Name));
//----------------------------------------------------------
// 4. array
// const Fruits = ["Mangga","Banana","Grapes","Pineapple"];
// Fruits[4] = "Santol";
// Fruits.push('Santisima'); //last item insert
// Fruits.unshift('Orange'); //first item insert
// Fruits.pop(); //remove last item
// console.log(Fruits);
// console.log(Array.isArray(Fruits));
// console.log(Fruits.indexOf('Mangga'));

// Fruits.splice(0, 1); //removing item by index number
// console.log(Fruits);
//----------------------------------------------------------
// 5. object literals
//  const tao = {
//      firstName : "Pedro",
//      lastName : "Penduko",
//      age: 35,
//      favorites : [
//          'Apple','Blue','English','PinoyFreeCoder'
//      ],
//      familyMembers : {
//          father : 'Pedro Sr',
//          mother : 'Nenang Penduko',
//          sister : 'Nena Penduko',
//      }
//  };

//  console.log(tao.familyMembers.sister);
// 6. objects within array
const Contacts = [
    {
        id: 1,
        fullName: "Pedro Penduko",
        isSaved : "Phone"
    },
    {
        id: 2,
        fullName: "Pedro Penduko Sr",
        isSaved : "Phone"
    },
    {
        id: 3,
        fullName: "Nenang Penduko",
        isSaved : "SD"
    },
];

//console.log(Contacts[1].fullName);

//looping

//for
// for(let i = 0; i < Contacts.length; i++){
//     console.log(Contacts[i].fullName);
// }

// for(let contact of Contacts){ //optimize looping of array
//  console.log(contact.fullName);
// }

// Contacts.forEach(function(contact){
//     console.log(contact.fullName);
// });

const ContactsFullname = Contacts.map(function(contact) { //get items from array and still return as array
    //return contact.fullName;
});

//console.log(ContactsFullname);
//while

let i = 0;
while (i < 10){
   // console.log(`While loop ang value ay ${i}`);
    i++;
}

//filter - retrieve item from array with condition

const ContactsPhone = Contacts.filter(function(contact){
    return contact.isSaved == "Phone";
}).map(function(contact){
    return contact.fullName;
});
console.log(ContactsPhone);
// const ContactsJSON = JSON.stringify(Contacts);
// console.log(ContactsJSON);
