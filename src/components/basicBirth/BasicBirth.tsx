import { Container, Field, Button, Buttons } from "./styled"
import { props } from "../../types/input"

const BasicBirth = ({setInput, input, nextStep, prevStep}: props) => {
    return(
        <Container
            animate={{x: [220, 0]}}
        >

            <Field>
                <label htmlFor="month">Mes</label>
                <input type="text" id="month" name="month" onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} />
            </Field>

            <Field>
                <label htmlFor="year">Ano</label>
                <input type="number" id="year" name="year" onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} />
            </Field> 

            <Buttons>

                <Button
                        animate={{x: [220, 0]}}
                        onClick={prevStep}
                    >
                        Anterior
                </Button>

                <Button
                        animate={{x: [220, 0]}}
                        onClick={nextStep}
                    >
                        submit
                </Button>

            </Buttons>

        </Container>
    )
} 

export default BasicBirth