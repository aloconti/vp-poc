import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, w1, w2, w3, w4, p) {
  return { name, w1, w2, w3, w4, p };
}

const rows = [
  createData('Student1',' P', 'A', 'P', 'P', 3),
  createData('Student2', 'P', 'A', 'A', 'P', 2),
  createData('Student3', 'P', 'P', 'P', 'P', 4),
  createData('Student4', 'P', 'A', 'A', 'P', 2),
  createData('Student5', 'P', 'P', 'P', 'A', 3),
  createData('Student6', 'A', 'A', 'P', 'A', 1),
  createData('Student7', 'P', 'A', 'A', 'A', 1),
  createData('Student8', 'P', 'A', 'P', 'P', 3),
  createData('Student9', 'A', 'P', 'P','P', 3),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nume Student</TableCell>
            <TableCell align="right">Saptamana1</TableCell>
            <TableCell align="right">Saptamana2</TableCell>
            <TableCell align="right">Saptamana3</TableCell>
            <TableCell align="right">Saptamana4</TableCell>
            <TableCell align="right">Saptamana5</TableCell>
            <TableCell align="right">Saptamana6</TableCell>
            <TableCell align="right"style={{fontWeight: "700"}}>Total Prezente</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right"
            //    style={{backgroundColor: row.w1==='P' ? '#ddffee' : '#ff7788'}}
               >
                   {row.w1=="P" ? <>&#10003;</> : '-'}</TableCell>
              <TableCell align="right"
            //   style={{backgroundColor: row.w2==='P' ? '#ddffee' : '#ff7788'}}
              >
                  {row.w2=="P" ? <>&#10003;</> : '-'}</TableCell>
              <TableCell align="right"
            //   style={{backgroundColor: row.w3==='P' ? '#ddffee' : '#ff7788'}}
              >
                  {row.w3=="P" ? <>&#10003;</> : '-'}</TableCell>
              <TableCell align="right"
            //   style={{backgroundColor: row.w4==='P' ? '#ddffee' : '#ff7788'}}
              >
                  {row.w4=="P" ? <>&#10003;</> : '-'}</TableCell>
              <TableCell align="right"
            //   style={{backgroundColor: row.w2==='P' ? '#ddffee' : '#ff7788'}}
              >
                  {row.w2=="P" ? <>&#10003;</> : '-'}</TableCell>
              <TableCell align="right"
            //   style={{backgroundColor: row.w1==='P' ? '#ddffee' : '#ff7788'}}
              >
                  {row.w1=="P" ? <>&#10003;</> : '-'}</TableCell>
              <TableCell align="right" style={{fontWeight: "500"}}>{row.p}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}