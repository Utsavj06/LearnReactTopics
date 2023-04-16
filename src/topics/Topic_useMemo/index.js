import React, { useState, useMemo } from 'react'

const TopicuseMemo = () => {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState(1)  

  const memoExample = useMemo(function multipy (){
    console.log('hi') // to check the component gets render or not.
    return count*5
  },[count])

  return (
    <>
      <h1>{count}</h1>
      <h2>{item}</h2>
      {/* <h3>{multipy()}</h3> */} {/* called the function when useMemo hook not implemented */}
      <h3>{memoExample}</h3>
      <button onClick={()=> setCount(count+1)}>Update Count</button>
      <button onClick={()=> setItem(item*100)}>Multiplyby100</button>
    </>
  )
}

export default TopicuseMemo