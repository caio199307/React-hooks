import { createContext, useState } from 'react'

const MyContext = createContext()
const MyProvider = (props) => {

    const [active, setActive] = useState(false)

    const [users, setUsers] = useState([
        {id:1,name:'Francis'},
        {id:2,name:'steve'},
        {id:3,name:'Miles'}
    ])

    return(
        <MyContext.Provider value={{
            users:users,
            activeState: active,
            setActive: () =>  setActive(!active)
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export {MyContext, MyProvider}