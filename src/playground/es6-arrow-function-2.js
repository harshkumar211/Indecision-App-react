//arguments object are no longer bounds with arrow function
const add = function(a,b){
    console.log(arguments);
    return a+b;
}

console.log(add(43,56));

const addArrow= (a,b)=>{
    //console.log(arguments);
    return a+b;
}
console.log(addArrow(334,54));


//this keyword is no longer bound

const user={
    name:'Harsh',
    cities:['Jainagar','Banglore'],
    printPlacesLived:function(){
        console.log(this.name);
        console.log(this.cities);
        const that=this; //this is the workaround where in below function we can access this.

        this.cities.forEach(function(city){
            console.log(that.name +" has lived in "+city);
        });
    }
}
user.printPlacesLived();

//now use of arrow function bind this to the invoked context.
const userArrow={
    name:'Harsh',
    cities:['Jainagar','Banglore'],
    printPlacesLived:function(){
        console.log(this.name);
        console.log(this.cities);
        this.cities.forEach((city)=>{
            console.log(this.name +" has lived in "+city);
        });
    }
}
userArrow.printPlacesLived();

//now define function in an object in this way
const userArrow2={
    name:'Harsh',
    cities:['Jainagar','Banglore'],
    printPlacesLived(){

        //use of map function
        const cityMessages = this.cities.map((city)=>{
            return this.name +' has lived in '+city+'!';
        });
        console.log('using Map'+cityMessages)
    }
}
userArrow2.printPlacesLived();


const multiplier={
    numbers:[2,3,4,5],
    multiplyBy: 4,
    multiply(){
        const result= this.numbers.map((number)=>{
                return this.multiplyBy * number;
        });
        return result;
    }
}

console.log(multiplier.multiply());