// Singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Harsh",
    "full Name": "Harsh Patel",
    [mySym]: "mykey1",
    age : 21,
    location: "Surat",
    email: "harsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "harsh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "harsh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());