import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import { Avatar } from "react-lorem-ipsum";
export default function SwitchView({ setIsTableView, isTableView }) {
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <ButtonGroup color="primary" aria-label="text primary button group">
          <IconButton
            color="primary"
            variant={!isTableView ? "contained" : "outlined"}
            // startIcon={}
            onClick={() => setIsTableView(false)}
          >
            <ViewModuleIcon />
          </IconButton>
          <IconButton
            color="primary"
            variant={isTableView ? "contained" : "outlined"}
            // startIcon={}
            onClick={() => setIsTableView(true)}
          >
            <ViewListIcon />
          </IconButton>
        </ButtonGroup>
      </Grid>
    </Container>
  );
}
