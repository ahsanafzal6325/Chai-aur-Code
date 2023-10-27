import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){

let [counter, setCounter] = useState(0);


function AddValue(){
  if(counter < 20){
    setCounter(counter+1);
  }
}
const  RemoveValue = () =>{
  if(counter > 0){
  setCounter(counter-1);
  }
}
  return(
    <>
    <h2>First Hook to update the value</h2>
    <h2>Counter Value: {counter}</h2>

    <button onClick={AddValue}>Add Value: </button>
    <br />
    <button onClick={RemoveValue}>Remove Value: </button>
    </>
  )
}

export default App
