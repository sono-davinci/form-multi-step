import { Container, Field } from "./styled"
import { props } from "../../types/input"

const BasicBirth = ({setInput, input}: props) => {
    return(
        <Container
        initial={{ opacity: 0, x: 320}}
        animate={{ opacity: 1, x: 0 }}
        >

            <Field>
                <label htmlFor="month">Mes</label>
                <input type="text" id="month" name="month" onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} />
            </Field>

            <Field>
                <label htmlFor="year">Ano</label>
                <input type="number" id="year" name="year" onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} />
            </Field>  

        </Container>
    )
} 

export default BasicBirth