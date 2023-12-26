import User from "./components/user"
import { MyProvider } from "./context"

const App = () => {


    return(
        <MyProvider>
            <User></User>
        </MyProvider>
    )
}

export default App