class BuildVisibility extends React.Component{

    constructor(props){
        super(props);
        this.state ={
                visibility:false
        }
        this.handleToggleDisplay=this.handleToggleDisplay.bind(this);

    }
    handleToggleDisplay(){
            this.setState((prevState)=>{
                return {
                    visibility:!prevState.visibility
                }
                  
            })
    }
    
    render(){
        return (<div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleDisplay}>{this.state.visibility ? 'Hide Details':'Show Details'}</button>
            {this.state.visibility && (<p >Hello Buddy</p>)}
            </div>);
    }
}
ReactDOM.render(<BuildVisibility />,document.getElementById('app'));