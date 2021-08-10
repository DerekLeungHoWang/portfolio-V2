import { motion } from 'framer-motion';
import styled from 'styled-components';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { Container, Grid, useTheme } from '@material-ui/core';
import AllSkills from './Skills/AllSkills';
import SkillLeft from './Skills/SkillLeft/SkillLeft';

const Wrapper = styled(Container)`
position: relative;
margin-bottom: 90px;
height: auto;
width: 100vw;
background-color: ${props => props.theme.palette.primary.background};

`;

const Header = styled(motion.h1)`
  color:${props => props.theme.palette.primary.main};
    font-size: 40px;
  margin-bottom: 90px;
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
        <Wrapper id="skillPage" theme={theme} maxWidth={false} >
            <Grid container
                xs={12}
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Header theme={theme} >Skills</Header>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"

                    spacing={1}
                >
                    <Grid container item xs={12} lg={6} direction="column"
                        justify="center"
                        alignItems="center" >
                        <SkillLeft />

                    </Grid>
                    <Grid container item xs={12} lg={6} direction="column"
                        justify="center"
                        alignItems="center" >
                        <AllSkills />
                    </Grid>
                </Grid>
            </Grid>
        </Wrapper>
    )
}
