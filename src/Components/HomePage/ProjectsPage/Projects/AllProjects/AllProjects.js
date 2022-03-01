import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Grid } from "@material-ui/core";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

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

  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
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
                      className={classes.styledButton}
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
