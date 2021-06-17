import React from 'react';
import { createMuiTheme, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import data from './Projects.json'
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen as faFolderOpen } from '@fortawesome/free-regular-svg-icons'

import styled from 'styled-components';
import StyledButton from '../../../../Common/StyledButton/StyledButton';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    cardWrapper: {
        display: "inline-block",
        height: 375,
        width: 400,
        maxWidth: 400,
        position: "relative"
    },
    card: {
        margin: 10,
        width: 390,
        height: 365,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "#283042",
        color: "white",


    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    pos: {
        marginBottom: 12,
    },
    styledButton: {
        position: "absolute",
        top: 45,
        right: 30,
        zIndex: 5,
        fontWeight: 400,
        textTransform: 'none'
    }
});

const FolderIcon = styled(FontAwesomeIcon)`
     position: absolute;
        top: 45px;
        left: 45px;
        font-size: 45px;
        color:${props => props.theme.palette.primary.main};
`
const Title = styled.h1`
     position: absolute;
     top: 80px;
     left: 45px;
    font-size: 25px;
     
`
const Description = styled.p`
     position: absolute;
     top: 140px;
     left: 45px;
    font-size: 15px;
    opacity:0.9;
`

const FrameWork = styled.div`
     position: absolute;
     bottom: 55px;
     left: 45px;
    font-size: 15px;
    opacity:0.5;
    & span{
        margin-right: 30px;
    }
   
`

const cardWrapper = {
    hidden: { opacity: 0, y: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            staggerChildren: .1,
        }
    }
}

const card = {
    hidden: {
        y: 50,
        // scale: 0,
        opacity: 0,
    },
    visible: {
        y: 0,
        // scale: 1,
        opacity: 1,
        transition: { duration: .5 }
    }
}


export default function ProjectArchive(props) {
    const history = useHistory();
    console.log(history);
    const theme = useTheme();
    const classes = useStyles();
    const prjPageInview = useSelector(state => state.AnimationReducer.prjPageInView)

    const handleClick = (id) => {
        history.push(`/projectDetail/${id}`)
    }
    return (
        <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            initial="hidden"
            animate={prjPageInview ? "visible" : "hidden"}
            variants={cardWrapper}
            component={motion.div}
        >
            {data.map((project, index) => {

                return (
                    <Grid

                        variants={card}
                        component={motion.div}
                        key={`${project.title}-${index}`} className={classes.cardWrapper} container item
                    >
                        <Card variant="outlined" key={project.title} className={classes.card}  >
                            <CardContent >
                                <FolderIcon theme={theme} icon={faFolderOpen} className={classes.folderIcon} />
                                <Title  >
                                    {project.title}
                                </Title>

                                <Button
                                    onClick={() => handleClick(project.id)}
                                    size="large"
                                    color="primary"
                                    variant="outlined"
                                    className={classes.styledButton} >View</Button>

                                <Description >
                                    {project.description}
                                </Description>
                                <FrameWork  >
                                    <span>{project.tag1} </span>
                                    <span>  {project.tag2 ?? null} </span>
                                    <span>  {project.tag3 ?? null} </span>
                                </FrameWork>


                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}

        </Grid>
    )
}
