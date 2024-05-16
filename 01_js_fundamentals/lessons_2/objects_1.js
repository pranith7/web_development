 const mysum = Symbol("key1");

 const JsUser = {
    name: "Pranith",
    "fullname" : "pranith  pashikanti",
    [mysum]: "mykeys",
    age : 24,
    location: "Mumbai",
    isLoggedin: true,
    lastLoginDays: ["Monday", "Tuesday"],
 }


//  console.log(JsUser);
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greeting();
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());