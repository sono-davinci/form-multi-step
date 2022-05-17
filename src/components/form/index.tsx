import { FormEvent, useState } from "react"
import { ContainerForm } from "./styled"
import BasicInfo from "../basicInfo/BasicInfo"
import BasicContact from "../basicContact/BasicContact"
import BasicBirth from "../basicBirth/BasicBirth"
import { input } from "../../types/input"

const init = {name: '', lastName: '', email: '', phone:  0, month: 0, year: 0}

const Form = () => {
    const [input, setInput] = useState<input>(init)
    const [step, setStep] = useState<number>(0)

    let currentStep = step
    
    const nextStep = () => currentStep = step + 1
    const prevStep = () => currentStep = step - 1

    const info = () => input.name.length > 3 && input.lastName.length > 3 ?  setStep(currentStep) : setStep(0)

    const contact = () => {
        const currentPhone = String(input.phone) 

        if(currentPhone.length === 9 && input.email.length > 0){
            return setStep(currentStep)
        }

        return setStep(1)
    }

    const birth = () => { 
        if((input.month > 0 && input.month <= 12 ) && input.year > 1922 && input.year < 2012){
            return (alert('Cadastro concluído! Obrigado ' + input.name), setInput(init), currentStep = 0, setStep(currentStep))
        }
        return setStep(2)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log(currentStep)
        if(currentStep === 1){
            info()
        }else if(currentStep === 2){
            contact()
        }else if(currentStep === 3){
            birth()
        }else{
            setStep(currentStep)
        }
        
    }
    
    return(

        <ContainerForm
        onSubmit={handleSubmit}
        >

            <h1>Cadastro</h1>

            {
                step === 0 && <BasicInfo setInput={setInput} input={input} nextStep={nextStep} />
            }

            {
                step === 1 && <BasicContact setInput={setInput} input={input} nextStep={nextStep} prevStep={prevStep}/>
            }

            {
                step === 2 && <BasicBirth setInput={setInput} input={input} nextStep={nextStep} prevStep={prevStep}/>
            }

        </ContainerForm>

    )
}

export default Form