import { useState } from 'react'
import React from 'react'


function MyApp(){
    const [text,setText] = useState()


    return(
        <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-orange-500 bg-gray-700'>
           <h1 className='text-white text-center'>My App heading</h1>
           <div className="flex items-center justify-center">
                <input type="text" disabled value={text} className=' mt-2 p-1'/>
           </div>
           <div className="flex items-center justify-center">
                <input type="text" onChange={(e)=> {
                    setText(e.target.value)
                }} className=' mt-2 p-1'/>
           </div>
           </div>
        </>
    )
}


export default MyApp
