
import './App.css'

function App() {
  
  

  
  return (
    <>
    <div className='flex justify-center items-center flex-col
     h-screen  '>
      <div className='bg-<> w-[400px] h-[200px] rounded-lg flex justify-center items-center flex-col gap-8' style={{backgroundImage: `url('/download (1).jpg')`,
        backgroundSize: 'cover',
            backgroundPosition: 'center',
            
      }}>

        <div className='flex flex-col gap-8 '>
          <h1 className=' text-lg text-yellow-500 font-bold'>COUNTER</h1>
          <p>VALUE:</p>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <button className='w-[60px] p-[5px] bg-red-400 text-white rounded-lg ' 
          type='button'>Count</button>
          <button className='w-[60px] p-[5px] bg-red-400 text-white rounded-lg '  type='reset'>Reset</button>
        </div>
      </div>
    </div>
    </>
  )

}


export default App