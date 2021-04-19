import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {NavLink} from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 16,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, startDate, endDate, num, others) {
    return { name, startDate, endDate, num, others };
}

const data = [

]

const rows = [
    createData('중앙도서관 1번 게이트 앞', '2020-01-02 23:34' , '2020-01-02 23:44', 24, ),
    createData('중앙도서관 1번 게이트 앞', '2020-01-02 23:34' , '2020-01-02 23:44', 24, '000촬영'),
    createData('중앙도서관 1번 게이트 앞', '2020-01-02 23:34' , '2020-01-02 23:44', 24, ),
    createData('중앙도서관 1번 게이트 앞', '2020-01-02 23:34' , '2020-01-02 23:44', 24, ),
    createData('공학도서관 아산공학관쪽 문 ', '2020-01-02 23:34' , '2020-01-02 23:44', 24, ),
    createData('중앙도서관 1번 게이트 앞', '2020-01-0 23:34' , '2020-01-02 23:44', 24, '22분간 촬영'),
    createData('중앙도서관 1번 게이트 앞', '2020-01-02 23:34' , '2020-01-02 23:44', 24, ),
    createData('중앙도서관 1번 게이트 앞', '2020-01-02 23:34' , '2020-01-02 23:44', 24, ),
    createData('중앙도서관 1번 게이트 앞', '2020-01-02 23:34' , '2020-01-02 23:44', 24, ),
    createData('중앙도서관 1번 게이트 앞', '2020-01-02 23:34' , '2020-01-02 23:44', 24, ),

];

const useStyles = makeStyles({
    container: {
        boxShadow: '0px 0px solid white',
        padding: 50,
    },
    table: {
        borderRadius: 5,
        minWidth: 500,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className = {classes.container}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell> 제목 </StyledTableCell>
                        <StyledTableCell align="right">시작 날짜</StyledTableCell>
                        <StyledTableCell align="right">끝 날짜 </StyledTableCell>
                        <StyledTableCell align="right">건수</StyledTableCell>
                        <StyledTableCell align="right">비고 </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                <NavLink to='/past/detail' >
                                    {row.name}
                                </NavLink>
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.startDate}</StyledTableCell>
                            <StyledTableCell align="right">{row.endDate}</StyledTableCell>
                            <StyledTableCell align="right">{row.num}</StyledTableCell>
                            <StyledTableCell align="right">{row.others}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
