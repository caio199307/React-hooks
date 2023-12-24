import { useEffect } from "react";

const Block = () => {
    useEffect(()=>{
        console.log('block created')

        return ()=>{
            console.log('block removed')
        }
    },[])

    return(
        <div style={{
            background:'red',
            color:'white',
            margin:'10px'
        }}>
            i am a block
        </div>
    )
}

export default Block;