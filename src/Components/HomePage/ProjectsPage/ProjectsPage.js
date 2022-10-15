import { motion } from "framer-motion";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { setPrjPageInView } from "../Actions/HomePageActions";
import { Button, ButtonGroup, Container, Grid, useTheme } from "@mui/material";
import ProjectArchive from "./Projects/Archive/ProjectArchive";
import AllProjects from "./Projects/AllProjects/AllProjects";
import FeaturedProjects from "./Projects/Featured/FeaturedProjects";
import PageHeader from "../../Common/PageHeader/PageHeader";
import SwitchView from "./Projects/SwitchView/SwitchView";

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
      // style={{ maxWidth: "70%" }}
    >
      <Grid
        container
        xs={12}
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ position: "relative" }}
      >
        <PageHeader setPrjPageInView={setPrjPageInView}>
          Projects
        </PageHeader>

        <SwitchView isTableView={isTableView} setIsTableView={setIsTableView} />

        <Grid xs={12} style={{ marginBottom: "20px" }}>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button
              variant={developedBy === "mySelf" ? "contained" : "outlined"}
              color="primary"
              onClick={() => setDevelopedBy("mySelf")}
            >
              My Projects
            </Button>
            <Button
              variant={developedBy !== "mySelf" ? "contained" : "outlined"}
              color="primary"
              onClick={() => setDevelopedBy("tutorial")}
            >
              Tutorial
            </Button>
          </ButtonGroup>
        </Grid>

        <ProjectArchive developedBy={developedBy} isTableView={isTableView} />
      </Grid>
    </Wrapper>
  );
}
