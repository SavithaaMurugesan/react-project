import React, { Fragment, useState } from 'react'
 const Calculators = () => {
     const[number,setNumber] = useState('');
       const handleClick=(e) =>{
         setNumber(number.concat(e.target.number))
       }
       const handleClear=()=>{
         setNumber('')
      }
      const handleAnswer=()=>{
        try{
           setNumber(eval(number).tostring())
         }
         catch(error){
           setNumber("Invalid")
         }
       }
      


  return (
    <>
    <div className="grid grid-cols-5 grid-rows-4 place-items-center">
    <div className='Calculator'>
      <h1 className='text-5xl text-blue-600'>Calculator</h1><br/>
      <div className='h-20'><input type='text'
                       placeholder='0'
                       value={number}
                       className=' w-full h-full border border-white  text-4xl text-right pr-5 '/></div>
    
      
      <div className='button'>
        <button className='w-10 h-10 border mt-5 mr-5 border-gray-600 bg-white'  value="1" onClick={handleClick} >1</button>
        <button className='w-10 h-10 border mt-5 mr-5 border-gray-600 bg-white '  value="2" onClick={handleClick}>2</button>
        <button className='w-10 h-10 border mt-5 mr-5 border-gray-600 bg-white '  value="3" onClick={handleClick}>3</button>
        <button className='symbol w-10 h-10 border mt-5 mr-5 border-gray-600 bg-white '  value="+" onClick={handleClick} >+</button>

        <button className='w-10 h-10 border mt-5 mr-5 border-gray-600 bg-white '  value="4" onClick={handleClick}>4</button>
        <button className='w-10 h-10 border mt-5 mr-5 border-gray-600 bg-white '  value="5" onClick={handleClick}>5</button>
        <button className='w-10 h-10 border mt-5 mr-5 border-gray-600 bg-white'  value="6" onClick={handleClick}>6</button>
        <button className='symbol w-10 h-10 border mt-5 mr-5 border-gray-600 bg-white'  value="-" onClick={handleClick}>-</button>

        <button className='w-10 h-10 border mt-5 mr-5 border-gray-600 bg-white'  value="7" onClick={handleClick}>7</button>
        <button className='w-10 h-10 border mt-5 mr-5 border-gray-600 bg-white'  value="8" onClick={handleClick}>8</button>
        <button className='w-10 h-10 border mt-5 mr-5 border-gray-600 bg-white '  value="9" onClick={handleClick}>9</button>
        <button className='symbol w-10 h-10 border mt-5 mr-5 border-gray-600 bg-white '  value="*" onClick={handleClick}>*</button>

        
        <button className='w-10 h-10 border mt-5 mr-5 border-gray-600 bg-white'  value="0" onClick={handleClick}>0</button>
        <button className='w-10 h-10 border mt-5 mr-5 border-gray-600 bg-white ' value="/" onClick={handleClick}>/</button>
        <button className='symbol w-10 h-10 border mt-5 mr-5 border-gray-600 bg-white ' value="%" onClick={handleClick}>%</button>
        <button className='symbol w-10 h-10 border mt-5 mr-5 border-gray-600 bg-white'  onClick={handleClear}>Ac</button>

        <button className='equal w-10 h-10 border mt-5 mr-5 border-gray-600 bg-white' onClick={handleAnswer}>=</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Calculators