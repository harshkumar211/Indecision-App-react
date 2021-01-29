
//extends class so that it will be a component

//component name should be starting with Capital letter, Thats how React differentiate it.
//if you give small letter, It will not render it. 


class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      options:props.options
    };
    this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
    this.handlePick=this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
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
    alert(option);
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
      <div>
      <Header title={title} subtitle={subtitle} ></Header>
      <Action hasOptions={this.state.options.length > 0} 
      handlePick={this.handlePick}></Action>
      <Options 
        options={this.state.options} 
        handleDeleteOptions={this.handleDeleteOptions}
        handleDeleteOption={this.handleDeleteOption}></Options>
      <AddOption handleAddOption={this.handleAddOption}></AddOption>
      </div>
    );
  }
};

IndecisionApp.defaultProps={
  options:[]
}

const Header=(props)=>{
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

Header.defaultProps={
  title:'Some Default Title'
}
/* class Header extends React.Component {
  render(){
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
} */

const Action=(props)=>{
  return (
    <div>
    <button disabled={!props.hasOptions} onClick={props.handlePick}>What Should I do?</button>
    </div>
  );
}


/* class Action extends React.Component{
  render(){
    return (
      <div>
      <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What Should I do?</button>
      </div>
    );
  }
} */

//stateless components using function.
const Options=(props)=>{
  return (
    <div> 
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length == 0 && <p>please add an option to get started</p>}
    {props.options.map((item)=>{
      return <Option key={item} optionText={item}
        handleDeleteOption={props.handleDeleteOption}>{item}</Option>;
    })}
      
    </div>
  );
}

/* class Options extends React.Component{
  //use of constructor
  constructor(props){
    super(props);
    this.handleRemoveAll=this.handleRemoveAll.bind(this); //first time binding and its efficient

  }
  handleRemoveAll(){
    console.log(this.props.options);
  }
  render(){

    return (
      <div>
      <button onClick={this.props.handleDeleteOptions}>Remove All</button>
      {this.props.options.map((item)=>{
        return <Option key={item} optionText={item}>{item}</Option>;
      })}
        
      </div>
    );
  }
} */

class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOption=this.handleAddOption.bind(this);
    this.state={
      error:''
    }
  }
  handleAddOption(e){
      e.preventDefault();

    const option=e.target.elements.option.value;
    const error= this.props.handleAddOption(option);
    this.setState(()=>({error}));
    if(!error){
      e.target.elements.option.value='';
    }
    
  }
  render(){
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
        </form>
      </div>
    );
  }
}

const Option = (props)=>{
  return (
    <div>{props.optionText} 
    <button 
    onClick={(e)=>{
      props.handleDeleteOption(props.optionText)
    }}>Remove</button></div>
  );
}

/* class Option extends React.Component{
  render(){
    return (
      <div>{this.props.optionText}</div>
    );
  }
} */
//define jsx template. in single line there is no need of small bracket. 
//since we are using multi line, we will use ()
/*const jsx=(
  <div>
  <Header />
  <Action />
  <Options />
  <AddOption />
  </div>
);*/
/* 
const User =(props)=>{
  return (
    <div>
      <p>Name: {props.userName}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}; */

ReactDOM.render(<IndecisionApp options={['Item One','Item Two']}/>,document.getElementById('app'));