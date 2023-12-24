import { useState, useCallback } from "react";
import Title from './components/title'
import Count from "./components/count";
import CountBtn from "./components/countBtn";
import Age from "./components/age";
import AgeBtn from "./components/ageBtn";

const App = () => {
    let [count, setCount] = useState(0)
    let [age, setAge] = useState(10)
    


    const handleCount = useCallback(() => {
        setCount(count+1)
    }, [count])
    
    

    const handleAge = useCallback(() => {
        setAge(age+1)
    }, [age]) 

    return(
        <>
            <Title/>
            <Count count={count}></Count>
            <CountBtn handleCount={handleCount}></CountBtn>
            <Age age={age}></Age>
            <AgeBtn handleAge={handleAge}></AgeBtn>
        </>
    )
}

export default App;