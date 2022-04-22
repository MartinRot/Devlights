import { useEffect, useState } from "react";

function Greeting({name, ...props}) {
  const [state, setState] = useState({ test: "I'm greeting function" });
  const [counter, setCounter] = useState(0);
  
  function onClick() {
    setCounter(counter + 1);
  }

  useEffect(() => {

    console.log(`cambio name -> ${name}`)

    //El return es opcional
    return () => {
        //Desuscribo de cualquier evento
    }

  },[name]) 
/*
El array de dependencias es opcional.
Si lo dejas vacion con cualquier tipo de cambio va a actualziar el componente
*/

useEffect(() => {
    console.log(`counter: ${counter}`)
}, [counter])

useEffect(() => {
    console.log("Greeting did mount")
},[])//Con el array de dependencias vacio se va a llamar solo cuando se monta



  return (
    <>
      <h1>Hello {name ? `My name is ${name}` : ""}</h1>
      <h3>State:</h3>
      <code>{JSON.stringify(state, null, 2)}</code>
      <h3>Props:</h3>
      <code>{JSON.stringify({props, ...props}, null, 2)}</code>
      <br />
      <p>counter: {counter}</p>
      <button onClick={onClick}>+1 counter</button>
    </>
  );
}

export default Greeting;
