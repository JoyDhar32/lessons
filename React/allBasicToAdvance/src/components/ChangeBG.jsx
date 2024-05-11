/*
<ChangeBG />


*/

import React from 'react'
import { useState } from 'react'

const ChangeBG = () => {
    const [bgColor, setBgColor] = useState("black");
  return (
    <>
    <div className="w-full h-screen flex items-center justify-center" style={{backgroundColor:bgColor}}> 
       
        <div className="w-1/6 h-1/6 bg-white flex items-center justify-center">
          <input type="color" className="w-1/2 h-1/2" value={bgColor} onChange={(e)=>setBgColor(e.target.value)} />
</div>
    </div>
    </>
  )
}

export default ChangeBG