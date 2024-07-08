import React, { useState } from 'react'
import Person from './components/Person';

const App = () => {
  const [isShowInfo, setIsShowInfo] = useState<boolean | null>(false)
  const [name, setName] = useState<string | null>("")
  const toggleInfo = () => {
    setIsShowInfo((prev) => !prev);
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   setName(e.target.value)
  }
  const submitform = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form Submitted")
  }

  return (
    <>
    {isShowInfo &&(
    <div className="content">
    <Person Fullname={"Joy"} age={22} married={false}/>
    <Person Fullname={"John"} age={32} married={true}/>
    </div>
    )}

<button onClick={toggleInfo}> Info</button>
<form onSubmit={submitform}>
<input type="text" placeholder="Enter your name" onChange={handleChange}/>
<button type="submit">Submit</button>
</form>
{name && <p>You Name is {name}</p>}
    </>
  )
}

export default App