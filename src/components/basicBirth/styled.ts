import styled from "styled-components";
import { motion } from "framer-motion";

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

    & > input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    }

    & > input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;
    }

`
