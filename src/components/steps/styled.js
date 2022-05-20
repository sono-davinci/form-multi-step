import styled from "styled-components";

export const Step = styled.span`
    border: 2px solid ${props => props.isActive ? 'blue' : 'gray'} ;
    background: ${props => props.isActive ? 'blue' : 'white'};
    color: ${props => props.isActive ? 'white' : 'black'};
    padding: 0.4rem;
    font-weight: bolder;
    transition: 0.3s;
`