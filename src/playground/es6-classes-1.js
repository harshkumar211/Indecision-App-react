console.log('ES6 classes Example');

// property and behaviour of class
class Person{
    constructor(name='Anonymous',age=0){
        this.name=name; //for the default value
        this.age=age;
    }
    getGreetings(){
        //return 'Hi '+this.name;  
        //return template string;

        return `Hi I am ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }
}

const me=new Person('Harsh Kumar',29);
console.log(me);
const anony=new Person("Kumar Harsh",29);
console.log(anony.getDescription());