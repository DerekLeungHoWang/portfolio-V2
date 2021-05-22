import { motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(motion.nav)`
  
  width: 100%;
  height: 100%;
  list-style-type: none;
  display: flex;
  align-content: center;
 justify-content: space-between;
  
`;

const NavUl = styled(motion.ul)`
        list-style-type: none;
        display: flex;
        align-content: center;
  
`;
const NavLi = styled(motion.li)`
 
  
`;
export default function Navbar() {
    return (
        <>
            <Wrapper>

                <h1>DEREK</h1>

                <NavUl>
                    <NavLi>
                        <Link to="/about">About</Link>
                    </NavLi>
                    <NavLi>
                        <Link to="/about">Projects</Link>
                    </NavLi>
                    <NavLi>
                        <Link to="/users">Experience</Link>
                    </NavLi>
                </NavUl>

            </Wrapper>
        </>
    )
}
