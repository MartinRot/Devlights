import './App.css';
import Greeting from './components/Greeting/Greeting';
import { useState } from "react";
import Login from './components/Login/Login';


function App() {

  const [name, setName] = useState("Marto")

  function onClick(){
    setName("Alberso")
  }

  return (
    <div className="App">
     {/*  <header className="App-header">
        <p>Hola</p>
          <Greeting name={name}/>

          <br />

          <button onClick={onClick}>Change name</button>

      </header> */}

      <Login />
    </div>
  );
}

export default App;
