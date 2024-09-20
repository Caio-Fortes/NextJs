import { useCallback, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { create } from "domain";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export interface PropsButton {
  titles: string[];
  rows: Array<(string | number)[]>;
}

export default function TableUI(props: PropsButton) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {props.titles.map((item, index) => (
                <TableCell key={index}>{item}</TableCell>
              ))}
              <TableCell>checkbox</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {row.map((data) => (
                  <TableCell component="th" scope="row">
                    {data}
                  </TableCell>
                ))}
                <TableCell>
                  <Checkbox {...label} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
