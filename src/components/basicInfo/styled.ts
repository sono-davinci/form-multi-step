import styled from "styled-components";
import { motion } from "framer-motion"

export const Container = styled(motion.div)`
    width: 100%;
`

export const Field = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    & > input{
        padding: 0.5rem;
        outline: none;
    }

`
export const Button = styled(motion.button)`
    width: 100%;
    font-weight: 900;
    color: white;
    border: none;
    border-radius: 1rem;
    padding: 1rem;
    background: blue;
    transition: all 0.3s;
    cursor: pointer;

    &:hover{
        background: #0045ea;
    }
`