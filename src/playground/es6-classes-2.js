//creating a subclass
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
class Student extends Person{
    constructor(name,age,major='Computer Science'){
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        return !!this.hasMajor;
    }
    getDescription(){
        let description=super.getDescription();
        if(this.major)
        return `${description} and My Major is ${this.major}`;
    }
}
const student=new Student('Harsh',29,'Computer Science');
console.log(student.getDescription());

class Traveller extends Person{
    constructor(name, age, homeLocation='Unknown'){
        super(name,age);
        this.homeLocation=homeLocation;
    }
    getGreetings(){
        let greetings=super.getGreetings();
        if(this.homeLocation){
            return `${greetings} . I am visiting from ${this.homeLocation}`;
        }
        return greetings;
    }
}
const travel1=new Traveller('Nitest','23','Asansol');

console.log(travel1.getGreetings());