import { useState } from 'react'

function App() {
  const [bg, setBg] = useState('olive')
  return (
    <>
<div className="w-full h-screen duration-200" style={{backgroundColor:bg}}>
  <div className="w-full h-screen flex justify-center items-center inset-x-0 px-2">
    <div className="w-full h-full flex justify-center items-center">
<button className="bg-purple-900 px-5 py-3 rounded text-white mr-5" onClick={()=>setBg('purple')}>Purple </button>
<button className="bg-gray-500 px-5 py-3 rounded text-white mr-5" onClick={()=>setBg('gray')}>Gray </button>
<button className="bg-blue-500 px-5 py-3 rounded text-white mr-5" onClick={()=>setBg('blue')}>Blue </button>
      </div>

    </div>
</div>

    </>
  )
}

export default App
