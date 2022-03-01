import { Button, ButtonGroup, Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewListIcon from '@material-ui/icons/ViewList';
export default function SwitchView({ setIsTableView,isTableView }) {
  const Wrapper = styled.div`
    @media (min-width: 1440px) {
      position: absolute;
      right: 0px;
      top: 50px;
    }
    @media (max-width: 1390px) {
        bottom:35px;
        position:relative;
        
        
      }
  `;

  return (
    <Wrapper>
      <ButtonGroup color="primary" aria-label="text primary button group">
        <Button  startIcon={<ViewModuleIcon/>} onClick={() => setIsTableView(false)}>View Module</Button>
        <Button startIcon={<ViewListIcon/>} onClick={() => setIsTableView(true)}>View Table</Button>
      </ButtonGroup>
    </Wrapper>
  );
}
