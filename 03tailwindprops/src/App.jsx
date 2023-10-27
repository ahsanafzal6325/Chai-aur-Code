import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    username : "Ahsan",
    Age: 24
  }
  let desc1 = "This description is 1st displaying by the props"
  let desc2 = "This description is 2nd displaying by the props"
  let btn1 = "1st Props btn Text"
  let btn2 = "2nd Props btn Text"

  let newArray = [1,2,3,4]

  return (
    <>
   <h1 className='bg-green-400 text-black p-4 rounded-xl padding-4 mb-4'>Tailwind Test</h1>
   <Card className="pb-4" cardName = "First Card" userName="Syed Ahsan Afzal"  description={desc1} btn={btn1}/>
   <Card cardName = "Second Card" userName="Asad Afzal" />
    </>
  )
}

export default App
