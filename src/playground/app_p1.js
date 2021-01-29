console.log("APp.js is running");


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

  const person={
    name:"harsh",
    age:"20",
    location:"Hamsphire"
  };

  function getLocation(location){
    if(location)
      return <p>Location: {location}</p>;
      else{
        return undefined;
      }
  }

  const template2=(
    <div>
      <h1>{person.name ? person.name.toUpperCase():'Anonymous'}</h1>
     {person.age > 18 &&  <p>Age: {person.age} </p>}
      {getLocation(person.location)}
    </div>
  );
const appRoot=document.getElementById("app");

ReactDOM.render(template,appRoot);