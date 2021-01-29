console.log("App.js is running");
//

const app={
  title:"Indecision App",
  subtitle:"Your options",
  options:[]
};

const onFormSubmit=(e)=>{
  //prevent full refresh
  e.preventDefault();

  const option=e.target.elements.option.value;
  if(option){
    app.options.push(option);
  }
  e.target.elements.option.value='';
  renderNewJSX();
};
//JSX- Javascript XML

  
const appRoot=document.getElementById("app");



const onRemoveAll=()=>{
  app.options=[];
  renderNewJSX();
}

const onMakeDecision=()=>{
    const randomNum = Math.floor(Math.random()*app.options.length);
    console.log(randomNum);
    const option=app.options[randomNum];
    alert(option);
}
const renderNewJSX=()=>{
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <button disabled={app.options.length > 0}onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
       
      <ol>
      {
        app.options.map((item)=><li key={item}>{item}</li>)
      }
      </ol>
      <form onSubmit={onFormSubmit}>
      <input type="text" name="option"></input>
      <button>Add Option</button>
      </form>
    </div>
    );
    ReactDOM.render(template,appRoot);
}
renderNewJSX();