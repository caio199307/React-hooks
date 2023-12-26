import { useContext } from "react"
import { MyContext } from "../context"

const UserItem = () => {
    const context = useContext(MyContext)

    console.log(context)

    return(
        <>
            {context.activeState ? 
                context.users.map(user => {
                    return(
                        <div key={user.id}>
                            <div>Name: {user.name}</div>

                        </div>
                    )
                })
            : null}
            <button onClick={context.setActive}>Show</button>
        </>
    )
}

export default UserItem