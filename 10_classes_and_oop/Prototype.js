// let myName = "Harsh     "
// let myLastName = "Patel     "

// console.log(myName.truelength);


let myHero = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.harsh = function(){
    console.log(`Harsh is present in all object`);
}

Array.prototype.heyHarsh = function(){
    console.log(`Harsh says hello`);
}

// heroPower.harsh()
// myHero.harsh()
// myHero.heyHarsh()
// heroPower.heyHarsh()

//inheritance

const User = {
    name: "Chai",
    email: "harsh@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "HarshAurCode       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"harsh".trueLength()
"iceTea".trueLength()