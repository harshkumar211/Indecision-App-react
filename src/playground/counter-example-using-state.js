class ComponentCounter extends React.Component{
    constructor(props){
        super(props);
       this.handleMinusOne= this.handleMinusOne.bind(this);
       this.handleAddOne=this.handleAddOne.bind(this);
       this.handleReset= this.handleReset.bind(this);
       this.state={
           count:props.count
           
       }
    }
    componentDidMount(){
        console.log('Fetching Data');
        const counter=localStorage.getItem('counter');
        const count=parseInt(counter,10);
        if(!isNaN(count))
            this.setState(()=>({count}));
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('counter',this.state.count);
        }

    }
    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count:prevState.count +1
            };
        });
    }
    handleMinusOne(){
         this.setState((prevState)=>{
            return {
                count:prevState.count -1
            };
        }); 
        
    }
    handleReset(){
     this.setState(()=>{
            return {
                count:0
            };
        }); 
        
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleReset}>reset</button>
                <button onClick={this.handleMinusOne}>-1</button>
            </div>
        );
    }
}
ComponentCounter.defaultProps={
    count:0
}
//if you dont pass the value of count here, It will be using the defaultProps object
ReactDOM.render(<ComponentCounter />,document.getElementById('app'));