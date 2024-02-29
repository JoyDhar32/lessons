/*
//     let name = prompt("Enter your name: ");
//     let age = prompt("Enter your age: ");
//     let address = prompt("Enter your address: ");
//     let phone = prompt("Enter your phone number: ");
//     let email = prompt("Enter your email: ");

// document.getElementById("info").innerHTML = `Name: ${name} <br> Age: ${age} <br> Address: ${address} <br> Phone: ${phone} <br> Email: ${email}`;
*/

// Method Two to get the value of input field
let username;
const submit =()=>{
    username= document.getElementById("name").value;
    document.getElementById("showName").innerHTML= `You name is <span style="color:red">${username}<span>`
}
