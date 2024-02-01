import React, {useEffect,useState} from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0)
    // Variation one of useEffect Hook wihout dependency array
    // useEffect(()=>{
    //     document.title = `Chats(${count})`
    // })

    // Variation two of useEffect Hook with empty array
    // useEffect(()=>{
    //     document.title = `Chats(${count})`
    // },[])
    // Third variation of useEffect Hook with dependency array
    useEffect(()=>{
        document.title = `Chats(${count})`
    },[count])
  return (
    <>
    <h2>{count} new Messages</h2>
    <button onClick={()=>setCount((pre)=>pre+1)} className="btn btn-info btn-sm pl-2">Click Me</button>
    </>
  )
}

export default UseEffectHook

/*
variation of useEffect Hook
- useEffect Hook runs after every render of the component.
*/
// definition of useEffect Hook
