const square=function (x){
    return x*x;
}
console.log(square(5));


//all Arrow functions are anonymous
//use of es6 arrow function
const squareArrow=(x)=>{
    return x*x;
}
console.log(squareArrow(9));


//single line function //expression syntax
const squareArr = (x) => x*x;
console.log(squareArr(1001));

//challenge

const getFirstName=(fullName)=>{
    return fullName.split(' ')[0];
}

console.log(getFirstName('Harsh kUMAR'));

//using expression syntax

const firstNameUsingExpression=(fullName)=>fullName.split(' ')[0];
console.log(firstNameUsingExpression('Kumar Harsh'));