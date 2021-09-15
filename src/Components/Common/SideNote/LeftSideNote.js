import { Grid, useTheme } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Leetcode } from '../../Common/Images/leetcode.svg';
import { ReactComponent as Github } from '../../Common/Images/github.svg';
import { ReactComponent as Linkedin } from '../../Common/Images/linkedin.svg';
import { motion } from 'framer-motion';

const IconWrapper = styled(motion.div)`
        display: flex;
        align-items: center;
        justify-content: space-evenly;
      
        stroke:${props => props.theme.palette.primary.main};
      

`
export default function LeftSideNote() {
    const theme = useTheme()
    return (
        <Wrapper>
            <Media>
                <IconWrapper theme={theme}>
                    <a href="https://github.com/DerekLeungHoWang/portfolio-V2" target="_blank">     <Github style={{ transform: "rotate(-90deg)" }} /></a>
                    <a href="https://leetcode.com/poiuz88i/" target="_blank"> <Leetcode style={{ transform: "rotate(-90deg)", marginLeft: "25px" }} /></a>
                    <a href="https://www.linkedin.com/in/derek-leung-7b7388122/" target="_blank">     <Linkedin style={{ transform: "rotate(-90deg)", marginLeft: "25px" }} /></a>
                </IconWrapper>
            </Media>
            <Line />
        </Wrapper>
    )
}

const Wrapper = styled.div`
   
   @media (max-width: 768px) {
    display: none;
  }
    
`



const Media = styled.div`
    position:fixed;
    color:white;
    height: 130px;
    bottom: 144px;
    left:-50px;
    transform:rotate(90deg);
    color:#a8b2d1 ;
   
  svg{
        height:22px;
        width:22px;
        fill:white !important;
        opacity: 0.5;
        &:hover{
            opacity: 1;
            transition: all .5s ease-in-out;
        }
  }
  
    
`

const Line = styled.div`
  
    position:fixed;
    height: 100px;
    bottom: 0px;
    left:60px;
    border-left: 1px solid #a8b2d1;

`