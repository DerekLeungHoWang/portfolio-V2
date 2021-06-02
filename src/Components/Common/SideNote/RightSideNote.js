import React from 'react'
import styled from 'styled-components'



export default function RightSideNote() {
    return (
        <Wrapper>
            <a href="mailTo:hkz88i00123@gmail.com"> <Email>hkz88i00123@gmail.com</Email></a>
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
    color:white;
    height: 150px;
    bottom: 144px;
    right:48px;
    transform:rotate(90deg);
    color:#a8b2d1 ;
    font-size: 14px;
    &:hover{
        color: white;
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