import { Grid, makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import CoverPage from './CoverPage/CoverPage'
import ProjectsPage from './ProjectsPage/ProjectsPage'
import { useInView } from "react-intersection-observer";
import { useSelector } from 'react-redux';
import SkillPage from './SkillPage/SkillPage';
import ContactPage from './ContacPage/ContactPage';
import RightSideNote from '../Common/SideNote/RightSideNote';
const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,


    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));



export default function HomePage() {
    const ref = useRef(null)



    const classes = useStyles();
    return (
        <Grid container
            className={classes.root}
        >
            <Grid container item xs={12}  >
                <CoverPage />
            </Grid>
            <Grid container item xs={12}  >
                <SkillPage />
            </Grid>
            <Grid container item xs={12}  >
                <ProjectsPage />
            </Grid>
            <Grid container item xs={12}  >
                <ContactPage />
            </Grid>

            <RightSideNote />
        </Grid>
    )
}
