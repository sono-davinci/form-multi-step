import { Step } from "./styled"

const Steps = ({step, isActive}) => {
    return( 
            
            <Step isActive={isActive} >
                {step}
            </Step>

    )
}

export default Steps