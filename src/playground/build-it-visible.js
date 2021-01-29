
let label='Show Details';
let show=false;

const toggleDisplay=()=>{
    if(show){
        label='Hide Details';
    }else{
        label='Show Details';
    }
    show=!show;
    render();
}
const appRoot=document.getElementById("app");
const render=()=>{
    const template=(
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggleDisplay}>{show ? 'Hide Details':'Show Detials'}</button>
        {show && (<p >Hello Buddy</p>)}
        </div>
    );
    ReactDOM.render(template,appRoot);
}
render();