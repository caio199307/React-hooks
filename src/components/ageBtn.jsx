import { memo } from "react";

const ageBtn = ({handleAge}) => {
    console.log('5-age BTN')
    return(
        <>
            <button onClick={handleAge}>
                INCREMENT AGE
            </button>

        </>
    )
}

export default memo(ageBtn)
