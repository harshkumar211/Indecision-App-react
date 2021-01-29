console.log("App.js is running");
//

const app={
  title:"Indecision App",
  subtitle:"This is info",
  options:['one','two']
};
//JSX- Javascript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 && <p>{app.options}</p>}
    <ol>
    <li>Item3
    </li>
    <li>Item2</li>
    </ol>
  </div>
  );

  let count=0;
  const addOne=()=>{
    console.log('addOne',count);
    count+=1;
    renderCounterApp();
  }

  const minusOne=()=>{
    console.log('Minus one');
    count-=1;
    renderCounterApp();
  }
  const reset=()=>{
    console.log('reset');
    count=0;
    renderCounterApp();
  }
  
const appRoot=document.getElementById("app");

const renderCounterApp=()=>{
  const templateTwo=(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo,appRoot);
}
renderCounterApp();