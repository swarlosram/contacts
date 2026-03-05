let contacts = [
    { name: "John", phone: "555-1234", email: "john@gmail.com" },
    { name: "Sarah", phone: "555-5678", email: "sarah@gmail.com" },
    { name: "Mike", phone: "555-9999", email: "mike@gmail.com" }
];
console.log(contacts);  

contacts.forEach(function(contact) {
    console.log(contact.name);
    console.log(contact.phone);
    console.log(contact.email);

});


contacts.forEac