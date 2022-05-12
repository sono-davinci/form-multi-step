import { Container, Field } from "./styled"
import { props } from "../../types/input"

const BasicContact = ({setInput, input}: props) => {
    return(
        <Container
        initial={{ opacity: 0, x: 320}}
        animate={{ opacity: 1, x: 0 }}
        >

            <Field>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}  value={input.email}/>
            </Field>

            <Field>
                <label htmlFor="phone">Celular</label>
                <input type="number" id="phone" name="phone" onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} value={input.phone} />
            </Field>

        </Container>
    )
} 

export default BasicContact