import React from 'react'
import styled from 'styled-components'
import { useTheme } from '@material-ui/core'


export default function RightSideNote() {
    const theme = useTheme();
    return (
        <Wrapper >
            <a href="mailTo:hkz88i00123@gmail.com"> <Email theme={theme}>hkz88i00123@gmail.com</Email></a>
            <Line />
        </Wrapper>
    )
}

const Wrapper = styled.div`

   
   @media (max-width: 768px) {
    display: none;
  }
    
`



const Email = styled.div`

    position:fixed;
    color:${props => props.theme.palette.primary.main};
    height: 150px;
    bottom: 144px;
    right:48px;
    transform:rotate(90deg);
    font-size: 14px;
    &:hover{
        color:${props => props.theme.palette.primary.main};
        transition: all .5s ease-in-out;
    }
    
`

const Line = styled.div`
  
    position:fixed;
    height: 100px;
    bottom: 0px;
    right:60px;
    border-left: 1px solid #a8b2d1;
`