import { motion } from "framer-motion";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { setPrjPageInView } from "../Actions/HomePageActions";
import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  Tooltip,
  useTheme,
} from "@mui/material";
import ProjectArchive from "./Projects/Archive/ProjectArchive";
import AllProjects from "./Projects/AllProjects/AllProjects";
import FeaturedProjects from "./Projects/Featured/FeaturedProjects";
import PageHeader from "../../Common/PageHeader/PageHeader";
import SwitchView from "./Projects/SwitchView/SwitchView";
import TagFilter from "./Projects/TagFilter/TagFilter";
import { data } from "./Projects/Archive/data";

const Wrapper = styled(Container)`
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.palette.primary.background};
`;

export default function ProjectsPage(props) {
  const { id } = props;
  const theme = useTheme();
  const dispatch = useDispatch();
  const [isTableView, setIsTableView] = useState(false);
  const [ref, inView, entry] = useInView({ threshold: 0.1 });
  const [developedBy, setDevelopedBy] = useState("mySelf");
  const [projectData, setProjectData] = useState(data);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    if (inView) {
      dispatch(setPrjPageInView(true));
    } else {
      dispatch(setPrjPageInView(false));
    }
  }, [inView]);

  return (
    <Wrapper
      id="projectPage"
      ref={ref}
      theme={theme}
      maxWidth={false}
      // container
      // sx={{ maxWidth: "70%" }}
    >
      <Grid container style={{ position: "relative" }}>
        <PageHeader setPrjPageInView={setPrjPageInView}>Projects</PageHeader>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{ marginBottom: "20px" }}
        >
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Tooltip placement="top" title="Projects developed by myself">
              <Button
                variant={developedBy === "mySelf" ? "contained" : "outlined"}
                color="primary"
                onClick={() => setDevelopedBy("mySelf")}
              >
                My Projects
              </Button>
            </Tooltip>
            <Tooltip
              placement="top"
              title="Projects that I coded along tutorial"
            >
              <Button
                variant={developedBy !== "mySelf" ? "contained" : "outlined"}
                color="primary"
                onClick={() => setDevelopedBy("tutorial")}
              >
                Tutorial
              </Button>
            </Tooltip>
          </ButtonGroup>

        
        </Grid>

    

        <ProjectArchive
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          projectData={projectData}
          setProjectData={setProjectData}
          developedBy={developedBy}
          isTableView={isTableView}
          setIsTableView={setIsTableView}
        />
      </Grid>
    </Wrapper>
  );
}
