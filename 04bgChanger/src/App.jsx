import { useState } from "react"


function App() {

  const [color,setColor] = useState("olive");
  const [head,setHead] = useState("olive")
  let btn = 'Olve Color';
  return (
    <div className="w-full h-screen duration-300" style={{backgroundColor: color}}>
      <h1 className="flex flex-wrap justify-center gap-3 text-5xl pt-36 text-white">{head}</h1>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'red'}}
          onClick={
            function(){
              setColor("red");
              setHead("red")
            }
          }>
            Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'green'}}
          onClick={
            function(){
              setColor("green");
              setHead("green")

            }
          }>
            Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'blue'}}
          onClick={
            function(){
              setColor("blue");
              setHead("blue")

            }
          }>
            Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'lime'}}
          onClick={
            function(){
              setColor("lime");
              setHead("lime")

            }
          }>
            Lime</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:'white'}}
          onClick={
            function(){
              setColor("white");
              setHead("white")

            }
          }>
            White</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'black'}}
          onClick={
            function(){
              setColor("black");
              setHead("black")

            }
          }>
            Black</button>
        </div>

        <div>

        </div>
      </div>

    </div>
  )
}

export default App
