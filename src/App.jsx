import { useState,  } from "react";
import Title from './components/title'
import Count from "./components/count";
import CountBtn from "./components/countBtn";
import Age from "./components/age";
import AgeBtn from "./components/ageBtn";

const App = () => {
    let [count, setCount] = useState(0)
    let [age, setAge] = useState(10)

    const handleCount = () => {
        setCount(count+1)
    }

    const handleAge = () => {
        setAge(age+1)
    }

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