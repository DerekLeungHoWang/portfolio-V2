import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  IconButton,
  Avatar,
  Tooltip,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
export default function SwitchView({ setIsTableView, isTableView }) {
  return (
    <Container sx={{width:"58%"}} >
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <ButtonGroup color="primary" aria-label="text primary button group">
          <Tooltip title="Module View">
            <Button
              color="primary"
              variant={!isTableView ? "contained" : "outlined"}
              // startIcon={}
              onClick={() => setIsTableView(false)}
            >
              <ViewModuleIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Table View">
            <Button
              sx={{ cursor: "pointer" }}
              color="primary"
              variant={isTableView ? "contained" : "outlined"}
              // startIcon={}
              onClick={() => setIsTableView(true)}
            >
              <ViewListIcon />
            </Button>
          </Tooltip>
        </ButtonGroup>
      </Grid>
    </Container>
  );
}
