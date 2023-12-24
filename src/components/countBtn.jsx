import { memo } from "react";

const CountBtn = ({handleCount}) => {
    console.log('3-count BTN')

    return(
        <>
            <button onClick={handleCount}>
                INCREMENT COUNT
            </button>

        </>
    )
}

export default memo(CountBtn)
