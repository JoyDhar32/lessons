/*
In JavaScript, an object is a complex data type that allows you to store and organize data using key-value pairs. Objects are a fundamental part of the language, and they provide a flexible way to represent structured information. Here's an in-depth explanation of JavaScript objects:*/
/*Creating Objects:
Objects can be created using different syntaxes:*/

// 1. Object Literal
const person = {
    firstName: "Joy",
    lastName: "Dhar",
    age: 25,
    hobbies: ["Coding", "Playing Chess"],
    address: {
      city: "Sydney",
      State: "NSW",
      country: "Australia",
    },
    fullname(){
      return `${this.firstName} ${this.lastName}`;
    },
  };
  console.log(`Full Name: ${person.firstName} ${person.lastName} \nAge: ${person.age} \nHobbies: ${person.hobbies} \nAddress: ${person.address.city}, ${person.address.State}, ${person.address.country}`);
  //push property
  person.email = "joynsw100@gmail.com";
  person.hobbies.push("Reading Books");
  console.log(`Email: ${person.email} \nperson.hobbies: ${person.hobbies}`);

  console.log(person.fullname());