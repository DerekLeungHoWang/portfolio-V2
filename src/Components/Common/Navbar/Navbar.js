import { Container, Grid, useTheme } from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RightNav from '../RightNav/RightNav';
import { menuItems } from './MenuItem'
// const Wrapper = styled(motion.div)`
 
//     position: absolute;
//     top: 0;
//     width: 100vw;
//     height: 100vh;
//     display: flex;
//     align-content: center;
//     justify-content: space-between;
//     color:${props => props.theme.palette.primary.main};
// `;


const Logo = styled(motion.h1)`
    margin-top: 35px;
    margin-left: 20px;
    color:${props => props.theme.palette.primary.main};
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color:${props => props.theme.palette.primary.main};
`;
export default function Navbar() {

    const theme = useTheme();
    let color = theme.palette.primary.main
    return (

        <Container id="navBar" theme={theme} maxWidth={false}>
            <Grid container justify="space-between">
                <Logo theme={theme} >Portfolio</Logo>

                <RightNav />
            </Grid>

        </Container>

    )
}
