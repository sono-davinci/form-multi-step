import { Container, Field } from "./styled"
import { props } from "../../types/input"


const BasicInfo = ({setInput, input}: props) => {

    return(
        <Container
        initial={{ opacity: 0, x: 320}}
        animate={{ opacity: 1, x: 0 }}
        >

            <Field>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value})} value={input.name} />
            </Field>

            <Field>
                <label htmlFor="lastName">Sobrenome</label>
                <input type="text" id="lastName" name="lastName" onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} value={input.lastName} />
            </Field>

        </Container>
    )
} 

export default BasicInfo