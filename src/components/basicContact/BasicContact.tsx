import { Container, Field, Button, Buttons } from "./styled"
import { props } from "../../types/input"

const BasicContact = ({setInput, input ,nextStep ,prevStep}: props) => {
    return(
        <Container
        animate={{x: [220, 0]}}
        >

            <Field>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}  value={input.email}/>
            </Field>

            <Field>
                <label htmlFor="phone">Celular</label>
                <input type="number" id="phone" name="phone" onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} value={input.phone} />
            </Field>
        <Buttons>
            <Button
                    animate={{x: [220, 0]}}
                    onClick={prevStep}
                >
                    Anterior
            </Button>

            <Button
                    animate={{x: [120, 0]}}
                    onClick={nextStep }
                >
                    Proximo
            </Button>


        </Buttons>

        </Container>
    )
} 

export default BasicContact