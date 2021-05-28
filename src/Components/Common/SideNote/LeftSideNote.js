import { Grid } from '@material-ui/core';
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
        

`
export default function LeftSideNote() {
    return (
        <Wrapper>
            <Media>
                <IconWrapper>
                    <Github style={{ transform: "rotate(-90deg)"}} />
                    <Leetcode style={{ transform: "rotate(-90deg)", marginLeft:"25px"  }} />
                    <Linkedin style={{ transform: "rotate(-90deg)", marginLeft:"25px"  }} />
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
  }
  
    
`

const Line = styled.div`
  
    position:fixed;
    height: 100px;
    bottom: 0px;
    left:60px;
    border-left: 1px solid #a8b2d1;

`