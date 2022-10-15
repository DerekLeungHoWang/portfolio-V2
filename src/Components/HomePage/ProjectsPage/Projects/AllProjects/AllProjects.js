import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Grid } from "@mui/material";
import styled from "styled-components";
import { useHistory } from "react-router-dom";



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const DetailButton = styled(Button)`
//   position: absolute;
//   top: 5%;
//   right: 5%;
`;

export default function AllProjects({ data }) {
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/projectDetail/${id}`);

  };



  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table  aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Year</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Stack</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Detail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((project, index) => (
                <TableRow key={`${project.title}-${index}`}>
                  <TableCell component="th" scope="row">
                    {project.year}
                  </TableCell>
                  <TableCell align="right">{project.title}</TableCell>
                  <TableCell align="right">{project.end}</TableCell>
                  <TableCell align="right">{`${project.description.substring(
                    0,
                    40
                  )}...`}</TableCell>
                  <TableCell align="right">
                    <DetailButton
                      onClick={() => handleClick(project.id)}
                      // size="large"
                      color="primary"
                      variant="outlined"
                    
                    >
                      Detail
                    </DetailButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
