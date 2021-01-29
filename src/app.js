import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css';
import './styles/styles.scss';


/* const Layout=()=>{
  return(<div>
    <p>Header</p>
    <p>Footer</p>
    </div>);
} */
ReactDOM.render(<IndecisionApp options={['Item One','Item Two']}/>,document.getElementById('app'));

/* 
class OldSyntax{
  constructor(){
    this.name='Harsh';
  }
}

const oldSyntax=new OldSyntax();
console.log(oldSyntax.name);


class NewSyntax{
  name='jan';
  getGreetings=()=>{
    return `Hi I am ${this.name}`;
  }
}
const newSyntax=new NewSyntax();
const getGreetings=newSyntax.getGreetings;
console.log(getGreetings()); */