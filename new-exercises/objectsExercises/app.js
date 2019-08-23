// objects this and function: PRACTICE

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    console.log(this.firstName + " " + this.lastName);
    }
}

const person = {
  firstName  : "John",
  lastName   : "Doe",
  id         : 5566,
  myFunction : function() {
    return this;
  }
};

// console.log(person.myFunction())
// this calls on the function which returns what 'this' is. this is the global object

const person = {
    name: 'The Joker',
    type: 'evil',
    enemy: 'Batman',
    speak: function () {
        console.log('Why so serious?');
    }
};

console.log(person.speak);  // tells you that this is a Function type in the console since we're not executing it with the () yet.
person.speak();

const person = {
    name: 'Harry',
    age: 11,
    birthday: function () {
        this.age++;
    }
};

console.log(person.age);
person.birthday();
console.log(person.age);