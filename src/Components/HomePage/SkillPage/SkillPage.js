import { motion } from 'framer-motion';
import styled from 'styled-components';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { Container, Grid, useTheme } from '@mui/material';
import AllSkills from './Skills/AllSkills';
import SkillLeft from './Skills/SkillLeft/SkillLeft';
import PageHeader from '../../Common/PageHeader/PageHeader';

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
  position: relative;
  &:after {
    margin-top: 5px;
    position: absolute;
	content: '';
	display: block;
	width: 30%;
	height: 4px;
	background-color: #f57542;
    left: 35%;
}
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
                justifyContent="center"
                alignItems="center"
            >
                <PageHeader>Skills</PageHeader>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"

                    spacing={1}
                >
                    <Grid container item xs={12} lg={6} direction="column"
                        justifyContent="center"
                        alignItems="center" >
                        <SkillLeft />

                    </Grid>
                    <Grid container item xs={12} lg={6} direction="column"
                        justifyContent="center"
                        alignItems="center" >
                        <AllSkills />
                    </Grid>
                </Grid>
            </Grid>
        </Wrapper>
    );
}
