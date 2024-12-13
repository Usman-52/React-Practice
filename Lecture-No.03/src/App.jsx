
import { useEffect, useState } from 'react'
import './App.css'
import Home from './Pages/home'

function App() {
  let [advice, setAdvice] = useState('') 
  let [count, setCount] = useState(0)
  async function getDAta() {
    const response = await fetch("https://api.adviceslip.com/advice")
    const data  = await response.json();
    setAdvice(data.slip.advice)
    setCount( (c) => c +1)
  } 
  useEffect(function (){
    getDAta()
  }, [])
  return (
    <>
      <Home/>
      <h1 className='bg-red-600 text-white text-lg'>FETCHING DATA FROM API APP</h1>
      <div className='flex justify-center items-center flex-col gap-8 h-[200px] bg-slate-400 '>
      <p>{advice}</p>
      <button onClick={getDAta}  type='button' className='w-20 h-10 bg-red-500 text-white text-lg rounded-lg'>Click</button>
      <Massage count ={count}/>
      </div>

    </> 
  )
  function Massage(props){
    <p>You have Read <strong>{props}</strong> advices</p>
  }
  
}

export default App
