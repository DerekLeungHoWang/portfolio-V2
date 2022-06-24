import React from "react";
import { createMuiTheme, makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { data } from "./data";
import {
  Box,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  IconButton,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen as faFolderOpen } from "@fortawesome/free-regular-svg-icons";

import styled from "styled-components";
import StyledButton from "../../../../Common/StyledButton/StyledButton";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import AllProjects from "../AllProjects/AllProjects";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkIcon from "@material-ui/icons/Link";

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
    background: theme.palette.primary.background,
    color: theme.palette.primary.main,
    [theme.breakpoints.up(300)]: {
      minWidth: 300,
    },
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
  console.log(history);
  const theme = useTheme();
  const classes = useStyles();
  const prjPageInview = useSelector(
    (state) => state.AnimationReducer.prjPageInView
  );
  const { isTableView } = props;
  const handleClick = (id) => {
    history.push(`/projectDetail/${id}`);
    //console.log("history:",props);
  };
  return isTableView ? (
    <AllProjects data={data} />
  ) : (
    <motion.div
      initial="hidden"
      animate={prjPageInview ? "visible" : "hidden"}
      variants={cardWrapper}
      component={motion.div}
      className="projectBoxContainer"
    >
      {data.map((project, index) => {
        if (project.id < 50) {
          console.log(project);
          return (
            <motion.div
              // container item
              // direction="row"
              // justify="center"
              // alignItems="center"
              variants={card}
              // component={motion.div}
              key={`${project.title}-${index}`}
              // xs={12} sm={4}   lg={4}
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
                  {project.youtube_link && 
                    <a href={project.youtube_link} target="_blank">
                      <IconButton aria-label="add to favorites">
                        <YouTubeIcon />
                      </IconButton>
                    </a>
                  }
                  {project.github_link && 
                    <a href={project.github_link} target="_blank">
                      <IconButton aria-label="share">
                        <GitHubIcon />
                      </IconButton>
                    </a>
                  }
                  {project.actual_link && (
                    <a href={project.actual_link} target="_blank">
                      <IconButton aria-label="share">
                        <LinkIcon />
                      </IconButton>
                    </a>
                  )}
                </CardActions>
                {/* <CardContent className="projectCardContent">
                  <FolderIcon
                    theme={theme}
                    icon={faFolderOpen}
                    className={classes.folderIcon}
                  />
                  <Title theme={theme}>{project.title}</Title>

                  <DetailButton
                    onClick={() => handleClick(project.id)}
                    // size="large"
                    color="primary"
                    variant="outlined"
                    className="projectStyledButton"
                  >
                    Detail
                  </DetailButton>
                  <Description>{project.description}</Description>
                  {/* <FrameWork  >
                                        <span>{project.tag1} </span>
                                        <span>  {project.tag2 ?? null} </span>
                                        <span>  {project.tag3 ?? null} </span>
                                    </FrameWork> */}
                {/* </CardContent> */}
              </Card>
            </motion.div>
          );
        }
      })}
    </motion.div>
  );
}

// container item
// direction="row"
// justify="center"
// alignItems="center"
// variants={card}
// component={motion.div}
// key={`${project.title}-${index}`}
// xs={12} sm={12} md={6} lg={4}
// className={classes.cardWrapper}
