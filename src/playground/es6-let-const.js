var nameVar="ANdrew";
nameVar='Mike';

//here you can redefine and reassign
var nameVar='I am changed';
console.log('nameVar',nameVar);


let nameLet='Jen';
nameLet='Julie';

//let can not be redefined.
//let nameLet="Harsh KUmar";
console.log('nameLet',nameLet);

const nameConst='Harsh KUmar';
//const nameConst="Hello";
//nameConst="I am reassigned";
//const cant be reassigned and redefined. 
console.log('NmaeConst',nameConst);


//var, const and let are function scoped.
//scope
function getPetName(){
    var petName='Hello';
    return  petName;
}

const petName=getPetName();
console.log(petName);

//block scope
///const and let can not be used outside of block. 
var fullName='Harsh KUmar';
if(fullName){
    const firstName=fullName.split(' ')[0];
    console.log(firstName);
}

console.log('firstName',firstName);