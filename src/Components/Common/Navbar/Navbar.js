import { useTheme } from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menuItems } from './MenuItem'
const Wrapper = styled(motion.nav)`
  position:absolute;
  top: 0%;
  width: 100%;
 
  list-style-type: none;
  display: flex;
  align-content: center;
 justify-content: space-between;
 color: ${props => props.color};
  
`;

const NavUl = styled(motion.ul)`
        list-style-type: none;
        display: flex;
        align-content: center;
        margin-right: 24px;
  
`;
const NavLi = styled(motion.li)`
     margin-right: 24px;
    text-decoration: none;
`;
const Logo = styled(motion.h1)`
    margin-left: 24px;
  
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.color};
`;
export default function Navbar() {
    const theme = useTheme();
    let color = theme.palette.primary.main
    return (
        <>
            <Wrapper color={color}>
                <Logo>DEREK</Logo>
                <NavUl >
                    {menuItems.map((item, index) => {
                        return (
                            <NavLi key={item.title}  >
                                <NavLink color={color} to={`${item.url}`} >{item.title}</NavLink>
                            </NavLi>
                        )
                    })}
                </NavUl>

            </Wrapper>
        </>
    )
}
