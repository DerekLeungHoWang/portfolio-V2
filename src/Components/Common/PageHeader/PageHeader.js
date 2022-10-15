import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTheme } from '@mui/material';
import SwitchView from '../../HomePage/ProjectsPage/Projects/SwitchView/SwitchView';

const Header = styled(motion.h1)`
  color:${props => props.theme.palette.primary.main};
   font-size: 40px;
  margin-bottom: 90px;
  position: relative;
  &:after {
    margin-top: 15px;
    position: absolute;
	content: '';
	display: block;
	width: 50%;
	height: 4px;
	background-color: #01BFA6;
    left: 25%;
   
}
`
export default function PageHeader(props) {
    const theme = useTheme()
    return (
        <div style={{
           width:"100%",
           position:"relative"
        }}>
            <div style={{display:"flex", justifyContent:"center"}}>
            <Header theme={theme} >{props.children}</Header>
            </div>
    
            
        </div>
    )
}
