console.log("app.js esta corriendo");
var template=(
  <div>
    <h1> Esto es JSX desde app.js</h1>
  </div>
);
var appRoot=document.getElementById('app');
ReactDOM.render(template, appRoot);
