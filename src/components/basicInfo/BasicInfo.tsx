import { Container, Field, Button } from "./styled"
import { props } from "../../types/input"


const BasicInfo = ({setInput, input , nextStep}: props) => {
    return(
        <Container
        animate={{x: [220, 0]}}
        >

            <Field>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value})} value={input.name} />
            </Field>

            <Field>
                <label htmlFor="lastName">Sobrenome</label>
                <input type="text" id="lastName" name="lastName" onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} value={input.lastName} />
            </Field>

            <Button
                animate={{x: [220, 0]}}
                onClick={nextStep}
            >
                Proximo
            </Button>
            
        </Container>
    )
} 

export default BasicInfo