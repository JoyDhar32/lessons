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
// definition of useEffect Hook ⭐️ useState Hook ⭐️
/*
The useEffect hook in React is another fundamental hook that enables you to perform side effects in functional components. Side effects in React components often include data fetching, subscriptions, manual DOM manipulations, and other operations that might impact the component's behavior. The useEffect hook is similar to the componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods in class components, but it is combined into a single API.

The useEffect hook is a function provided by React that allows functional components to perform side effects. It is used to manage the lifecycle of components, enabling you to execute code in response to component mounting, updating, or unmounting.

The useEffect hook takes two arguments:
Effect: A function that contains the code to be executed as a side effect.
Dependencies: An optional array of dependencies that the effect depends on. If the dependencies change, the effect will be re-run. If no dependencies are provided, the effect will run after every render of the component.
*/
