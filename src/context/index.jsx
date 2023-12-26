import { createContext, useState } from 'react'

const MyContext = createContext()
const MyProvider = (props) => {

    const [users, setUser] = useState([
        {id:1,name:'Francis'},
        {id:2,name:'steve'},
        {id:3,name:'Miles'}
    ])

    return(
        <MyContext.Provider value={users}>
            {props.children}
        </MyContext.Provider>
    )
}

export {MyContext, MyProvider}