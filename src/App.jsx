import { useState, useEffect } from "react"

const App = () => {
let [count, setCount] = useState(0)
let [animal, setAnimal] = useState('dog')

const addOne = () => setCount(count +1)
const restOne = () => setCount(count -1)
const setZero = () => setCount(0)

useEffect(()=>{
  console.log('run once')
},[])

/* useEffect(()=>{
  console.log(count)
}, [count, animal]) */

/* useEffect(()=>{
  console.log(animal)
}, [animal]) */

  return(
    <>
      <h3>Count: {count}</h3>
      <button onClick={addOne}>+1</button>
      <button onClick={restOne}>-1</button>
      <button onClick={setZero}>set to 0</button>
      <hr />
      <h3>{animal}</h3>
      <button onClick={()=>setAnimal('cat')}>Change animal</button>
    </>
  )
}

export default App