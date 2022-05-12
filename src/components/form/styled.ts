import styled from 'styled-components'


export const ContainerForm = styled.form`
    width: 400px;
    border-radius: 1rem;
    border: none;
    box-shadow: 0 0 15px #0000004a;
    padding: 1rem;


    & > h1{
        text-align: center;
        margin-bottom: 1rem;
    }
`

export const Button = styled.button`
    width: 50%;
    font-weight: 900;
    color: white;
    border: none;
    border-radius: 1rem;
    padding: 1rem;
    background: blue;
    cursor: pointer;
`

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
`