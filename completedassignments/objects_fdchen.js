
// challenge 1

const Mitzi = {
	"id": 1,
	"name": "Mitzi F",
	"email": "mmelloy0@psu.edu",
	"gender": "F"
}

const Kennan = {
	"id": 2,
	"name": "Kennan M",
	"email": "kdiben1@tinypic.com",
	"gender": "M"
}

const Keven = {
	"id": 3,
	"name": "Kevin M",
	"email": "kmummery2@wikimedia.org",
	"gender": "M",

	speak() {
		return "Hello, my name is" + this.name
	}
}

const Gannie = {
	"id": 4,
	"name": "Kennan M",
	"email": "gmartinson3@illinois.edu",
	"gender": "M"
}

const Antonietta = {
	"id": 5,
	"name": "Kennan M",
	"email": "adaine5@samsung.com",
	"gender": "F"

	multiplyNums(a,b) {
		return a * b
	}
}

// challenge 2

console.log(Mitzi.name);
console.log(Kennan.id);
console.log(Keven.email);
console.log(Gannie.name);
console.log(Antonietta.gender);

// challenge 3 // object methods

console.log(Keven.speak());
console.log(Antonietta.multiplyNums(3,4));

// stretch challenge 

class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._child = null; 
  }
 
  Speak(phrase) {
    return this.name + " said " + phrase;
  }

  get Child() {
    return this._child;
  }
  
  set Child(value) {
    this._child = value;
  }
  
}

class Child extends Parent {
  constructor(name, age) {
    super(name,age);
  }

  Speak(phrase) {
    return this.name + " said " + phrase;
  }
}

// create instance of class using class constructor:

const susan = new Parent("Susan", 70);
const george = new Child("George", 50);

susan.Child = george; 

const sam = new Child("Sam", 30);
george.Child = sam; 

console.log(susan.Speak("this"));
console.log(george.Speak("that"));
console.log(sam.Speak("Hey!"));






