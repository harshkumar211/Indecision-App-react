import React from 'react';
import AddOption from './AddOption.js';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    constructor(props){
      super(props);
      this.state={
        options:props.options,
        selectedOption:undefined
      };
      this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
      this.handlePick=this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.cancelOptionModal = this.cancelOptionModal.bind(this);
    }
    //lifecycle methods are only available for class level component.
    componentDidMount(){
  
      try{
      console.log("Fetching Data");
      const json=localStorage.getItem('options');
      
      const options=JSON.parse(json);
      if(options)
         this.setState(()=>({options:options}));
      }catch(e){
        // catch and show something. 
  
      }
    }
    
    componentDidUpdate(prevProps,prevState){
      /* console.log("Component just updated");
      console.log(prevProps);
      console.log(prevState);*/
      if(prevState.options.length != this.state.options.length){
        console.log('Saving Data');
        const json=JSON.stringify(this.state.options);
        localStorage.setItem('options',json);
      }
  
    }
    componentWillUnmount(){
      console.log('Component iwll unmount');
    }
    
    handleDeleteOptions(){
      /* this.setState(()=>{
        return {
          options:[]
        };
      }); */
  
      this.setState(()=>({options:[]})); //kindly note parenthesis to return the object.
    }
  
    handleDeleteOption(option){
      console.log("handleDeleteOption",option);
      this.setState((prevState)=>({
          options:prevState.options.filter((item)=>{
            return option !== item;
          })
      }))
    }
    handlePick(){
      const randomNum = Math.floor(Math.random()*this.state.options.length);
      
      const option=this.state.options[randomNum];
      this.setState(()=>({
        selectedOption:option
      }));
    }
    cancelOptionModal(){
        console.log("okay clicked");
        this.setState(()=>({
            selectedOption:undefined
        }))
    }
    handleAddOption(option){
      if(!option){
        return 'Enter Valid Values: ';
      }else if(this.state.options.indexOf(option) > -1){
        return 'This Option already Exist';
      }
      this.setState((prevState)=>({
        options:prevState.options.concat(option)
      }));
        
    }
    
    render(){
      const title='Indecision';
      const subtitle='Put your life in the hands of a Computer';
      const options=['thing one','thing two','thing 3','thing four'];
      return (
        <div className="container">
        <Header title={title} subtitle={subtitle} ></Header>
        <Action hasOptions={this.state.options.length > 0} 
        handlePick={this.handlePick}></Action>
        <div className="widget">
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}></Options>
        <AddOption handleAddOption={this.handleAddOption}></AddOption>
        </div>
        <OptionModal selectedOption={this.state.selectedOption} cancelOptionModal={this.cancelOptionModal}/>
        </div>
      );
    }
  };
  
  IndecisionApp.defaultProps={
    options:[]
  }
  
  