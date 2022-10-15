import { Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import CoverPage from './CoverPage/CoverPage'
import ProjectsPage from './ProjectsPage/ProjectsPage'
import { useInView } from "react-intersection-observer";
import { useSelector } from 'react-redux';
import SkillPage from './SkillPage/SkillPage';
import ContactPage from './ContacPage/ContactPage';
import RightSideNote from '../Common/SideNote/RightSideNote';
import LeftSideNote from '../Common/SideNote/LeftSideNote';
import FeaturedProjects from './ProjectsPage/Projects/Featured/FeaturedProjects';
import FeaturedProjectPage from './ProjectsPage/FeaturedProjectPage';
import Navbar from '../Common/Navbar/Navbar';
import { useHistory } from 'react-router-dom';
// const useStyles = makeStyles((theme) => ({
//     root: {
//         backgroundColor: theme.palette.primary.background
//     },
//     // paper: {
//     //     padding: theme.spacing(1),
//     //     textAlign: 'center',
//     //     color: theme.palette.text.secondary,
//     // },
// }));



export default function HomePage(props) {
    let { id } = props.match.params;

    const imageHasLoaded = true;
    const selectedMenu = useSelector(state => state.NavReducer.selectedMenu)
    const history = useHistory()
    console.log("IN HOME PAGE ?",props, history);
    // const classes = useStyles();
   


    return (
        <Grid container
            // className={classes.root}
        >

      
            <Grid container item xs={12}  >
                <CoverPage />
            </Grid>
            <Grid container item xs={12}  >
                <SkillPage />
            </Grid>
            {/* <Grid container item xs={12}  >
                <FeaturedProjectPage id={id} />
            </Grid> */}
            <Grid container item xs={12}   >
                <ProjectsPage id={id} />
            </Grid>
            <Grid container item xs={12}  >
                <ContactPage />
            </Grid>
            <LeftSideNote />
            <RightSideNote />

        </Grid>

    )
}
