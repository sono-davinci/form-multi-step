import { FormEvent, useState } from "react"
import { ContainerForm, Button, Buttons } from "./styled"
import BasicInfo from "../basicInfo/BasicInfo"
import BasicContact from "../basicContact/BasicContact"
import BasicBirth from "../basicBirth/BasicBirth"
import { input } from "../../types/input"

const Form = () => {
    const init = {name: '', lastName: '', email: '', phone:  0, month: 0, year: 0}
    
    const [input, setInput] = useState<input>(init)
    const [basic, setBasic] = useState<number>(0)

    const Element = [<BasicInfo setInput={setInput} input={input}/>, <BasicContact setInput={setInput} input={input}/>, <BasicBirth setInput={setInput} input={input}/>]

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if(basic == 1){
            if(input.name.length > 0 && input.lastName.length > 0){
                return
            }else {
                setBasic(0)
            }
        }else if(basic == 2){
            if(input.phone > 0 && input.email.length > 0){
                return
            }else {
                setBasic(1)
            }
        }else if(basic == 3){
            if(input.month > 0 && input.year > 0){
                alert('cadastro concluido! Obrigado')
                setInput(init)
                return setBasic(0)
            }else {
                setBasic(2)
            }
        }

    }
    

    return(

        <ContainerForm
        onSubmit={handleSubmit}
        >

            <h1>Cadastro</h1>

            { Element[basic] }

            <Buttons>
             
                <Button
                    style={{display: basic > 0 ? 'block' : 'none'  }}
                    onClick={() => setBasic(basic - 1)}
                >
                    Anterior
                </Button>
                  
               

                <Button
                    style={{display:  basic === Element.length - 1 ? 'none' : 'block'}}
                    onClick={() => setBasic(basic + 1)}
                >
                    Proximo
                </Button>

                <Button
                style={{display: basic === Element.length - 1 ? 'block' : 'none'}}
                onClick={() => setBasic(basic + 1)}
                >
                    Enviar
                </Button>

            </Buttons>

        </ContainerForm>

    )
}

export default Form