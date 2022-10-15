import React, { useEffect, useState } from "react";
import { createTheme, useTheme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { data } from "./data";
import {
  Box,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen as faFolderOpen } from "@fortawesome/free-regular-svg-icons";

import styled from "styled-components";
import StyledButton from "../../../../Common/StyledButton/StyledButton";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import AllProjects from "../AllProjects/AllProjects";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkIcon from "@mui/icons-material/Link";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: "100%",
  },
  cardWrapper: {
    position: "relative",
    marginBottom: "auto",
    flex: "0 0 192px",
  },
  card: {
    maxWidth: 400,
    minWidth: 100,
    minHeight: 320,
    position: "relative",
    borderRadius: "12px",
    background: "white",
    color: "black",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  img: {
    // position: "relative",
    // width: "100%",
    height: "200px",
  },
  imgRoot: {
    //   height:"280px"
  },
}));

const FolderIcon = styled(FontAwesomeIcon)`
  position: "absolute";
  top: 0;
  font-size: 45px;
  color: #cfcfcf;
`;
const Title = styled.p`
  top: 80px;
  left: 45px;
  font-size: 25px;
  color: ${(props) => props.theme.palette.primary.main};
`;
const Description = styled.p`
  top: 140px;
  left: 45px;
  font-size: 15px;
  opacity: 0.9;
`;

const FrameWork = styled.div`
  position: absolute;
  bottom: 0px;
  left: 5%;
  bottom: 5%;
  font-size: 15px;
  opacity: 0.5;
  & span {
    margin-right: 30px;
  }
`;

const DetailButton = styled(Button)`
  position: absolute;
  top: 5%;
  right: 3%;
`;

const cardWrapper = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const card = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function ProjectArchive(props) {
  const history = useHistory();
  const { developedBy } = props;
  const classes = useStyles();
  const prjPageInview = useSelector(
    (state) => state.AnimationReducer.prjPageInView
  );
  const [projectData, setProjectData] = useState(data);
  const { isTableView } = props;
  const handleClick = (id) => {
    history.push(`/projectDetail/${id}`);
    //console.log("history:",props);
  };

  useEffect(() => {
    let newProjectData = [...projectData];
    newProjectData = data.filter((d) => {
      console.log(d.developedBy, developedBy);
      return d.developedBy === developedBy;
    });
    console.log(newProjectData);
    setProjectData(newProjectData);
    return () => {};
  }, [developedBy]);

  //filter data according to developedBy

  return isTableView ? (
    <AllProjects data={projectData} />
  ) : (
    <motion.div
      initial="hidden"
      animate={prjPageInview ? "visible" : "hidden"}
      variants={cardWrapper}
      component={motion.div}
      className="projectBoxContainer"
    >
      {projectData.map((project, index) => {
        
          return (
            <motion.div
              variants={card}
              key={`${project.title}-${index}`}
              className="projectCardWrapper"
            >
              <Card
                variant="outlined"
                key={project.title}
                className="projectCard"
              >
                <CardActionArea onClick={() => handleClick(project.id)}>
                  {/* <div style={{height:"190px"}} > */}
                  <CardMedia
                    classes={{
                      img: classes.img,
                      root: classes.imgRoot,
                    }}
                    component="img"
                    // className={classes.media}
                    src={project.img}
                  />
                  {/* </div> */}
                  <CardContent>
                    <Typography
                      color="primary"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions disableSpacing>
                  {project.youtube_link && (
                    <a href={project.youtube_link} target="_blank">
                      <IconButton aria-label="add to favorites" size="large">
                        <YouTubeIcon />
                      </IconButton>
                    </a>
                  )}
                  {project.github_link && (
                    <a href={project.github_link} target="_blank">
                      <IconButton aria-label="share" size="large">
                        <GitHubIcon />
                      </IconButton>
                    </a>
                  )}
                  {project.actual_link && (
                    <a href={project.actual_link} target="_blank">
                      <IconButton aria-label="share" size="large">
                        <LinkIcon />
                      </IconButton>
                    </a>
                  )}
                </CardActions>
              </Card>
            </motion.div>
          );
        
      })}
    </motion.div>
  );
}
