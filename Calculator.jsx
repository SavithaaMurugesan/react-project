import React, { useState } from 'react'

const Calculator = () => {
    const [result, setResult] = useState("")

    const handleclick = (value) => {
        setResult(prevResult => prevResult + value);
    }
    const calculate = () => {
        try {
            setResult(eval(result).toString());
        }
        catch (error) {
            setResult('Error');
        }
    }
    const handleclear = () => {
        setResult("");
    }

    return (
        <>
            <h1 className='text-4xl border-black underline'>Simple Calculator</h1>
            <br />
            <div className=' m-30 border-2 border-black rounded text-black py-1 w-96  bg-red-200'>
                <br />
                <label><input className='border-2 border-indigo-700 rounded text-black py-1 w-64' type='text' value={result} readOnly /></label> <button className=' border-2 border-indigo-700 rounded text-black py-1 w-24 bg-white' onClick={handleclear}>AC</button>
                <br /><br />
                <button className=' border-2 border-indigo-700 rounded text-black py-1 w-24 bg-white' onClick={() => handleclick("1")}>1</button>
                <button className=' border-2 border-indigo-700 rounded text-black py-1 w-24 bg-white' onClick={() => handleclick("2")}>2</button>
                <button className=' border-2 border-indigo-700 rounded text-black py-1 w-24 bg-white' onClick={() => handleclick("3")}>3</button>
                <button className=' border-2 border-indigo-700 rounded text-black py-1 w-20 bg-white' onClick={() => handleclick("+")}>+</button>
                <br /><br />
                <button className=' border-2 border-indigo-700 rounded text-black py-1 w-24 bg-white' onClick={() => handleclick("4")}>4</button>
                <button className=' border-2 border-indigo-700 rounded text-black py-1 w-24 bg-white' onClick={() => handleclick("5")}>5</button>
                <button className=' border-2 border-indigo-700 rounded text-black py-1 w-24 bg-white' onClick={() => handleclick("6")}>6</button>
                <button className=' border-2 border-indigo-700 rounded text-black py-1 w-20 bg-white' onClick={() => handleclick("-")}>-</button>
                <br /><br />
                <button className=' border-2 border-indigo-700 rounded text-black py-1 w-24 bg-white' onClick={() => handleclick("7")}>7</button>
                <button className=' border-2 border-indigo-700 rounded text-black py-1 w-24 bg-white' onClick={() => handleclick("8")}>8</button>
                <button className=' border-2 border-indigo-700 rounded text-black py-1 w-24 bg-white' onClick={() => handleclick("9")}>9</button>
                <button className=' border-2 border-indigo-700 rounded text-black py-1 w-20 bg-white' onClick={() => handleclick("*")}>*</button>
                <br /><br />
                <button className=' border-2 border-indigo-700 rounded text-black py-1 w-24 bg-white' onClick={() => handleclick("0")}>0</button>
                <button className=' border-2 border-indigo-700 rounded text-black py-1 w-24 bg-white' onClick={() => handleclick("/")}>/</button>
                <button className=' border-2 border-indigo-700 rounded text-black py-1 w-24 bg-white' onClick={() => handleclick("%")}>%</button>
                <button className=' border-2 border-indigo-700 rounded text-black py-1 w-20 bg-white' onClick={calculate}>=</button>
                <br />
            </div>
        </>
    )
}

export default Calculator