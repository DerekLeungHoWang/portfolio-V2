import { motion } from 'framer-motion';
import styled from 'styled-components';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { Grid, useTheme } from '@material-ui/core';
import AllSkills from './Skills/AllSkills';
import SkillLeft from './Skills/SkillLeft/SkillLeft';

const Wrapper = styled(Grid)`
position: relative;
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.palette.primary.background};

`;

const Header = styled(motion.h1)`
  color:${props => props.theme.palette.primary.main};
    font-size: 40px;
    padding-bottom: 50px;
`

const HeaderWrapper = styled(motion.div)`
     width:100%;
     align-items: center;
     justify-content: center;

`

const Title = styled(motion.h1)`
    color:${props => props.theme.palette.primary.other};
`
export default function SkillPage() {
    const theme = useTheme();




    return (
        <Wrapper theme={theme} container direction="row"
            justify="center"
            alignItems="center"  >
            <Grid container item xs={12}
                direction="row"
                justify="center"
                alignItems="center"
            >

                <Header theme={theme} >Skills</Header>
            </Grid>



            {/* <Grid container item xs={12}
                direction="row"
                justify="center"
                alignItems="center"
            > */}

                <Grid container item xs={12} lg={6} direction="column"
                    justify="center"
                    alignItems="center" >
                    <SkillLeft />

                </Grid>
                <Grid container item xs={12} lg={6} direction="column"
                    justify="center"
                    alignItems="center" >
                    {/* <Title theme={theme} >Knowledge Table</Title> */}
                    <AllSkills />
                </Grid>
            {/* </Grid> */}
        </Wrapper>
    )
}
