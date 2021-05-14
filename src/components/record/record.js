import React, {useEffect, useState} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {NavLink, useHistory} from "react-router-dom";
import axios from 'axios';
import moment from "moment"
import Moment from "react-moment";
import 'moment/locale/ko';


const StyledTableCell = withStyles((theme) => ({
    head: {
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.main,
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

const useStyles = makeStyles({
    container: {
        // margin: 0,
        // marginLeft: 30,
        // marginRight:30,
        padding:30,
    },
    table: {
        boxShadow: 0,
        borderRadius: 5,
        minWidth: 300,
    },
    tableHead: {
        textAlign: "center",
    },
});

export default function CustomizedTables() {
    const classes = useStyles();
    const history = useHistory();

    const [records, setRecords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    if (!sessionStorage.getItem("token")) {
        alert("로그인이 필요한 서비스입니다.");
        history.push('/');
    }

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setRecords(null);
                setLoading(true);
                let token = sessionStorage.getItem('token');
                console.log(token);
                const response = await axios.get(
                    'http://localhost:8000/api/home/record',
                     {headers: {"Authorization": `Bearer ${token}`}}
                );
                setRecords(response.data.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchRecords();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!records) return null;

    const record = records.map((row) => {
        row.startTime = moment(row.startTime).format("YYYY년 MM월 DD일 HH시 mm분 ss초")
        row.endTime = moment(row.endTime).format("YYYY년 MM월 DD일 HH시 mm분 ss초")
        return row
    })

    return (
        <TableContainer component={Paper} className={classes.container}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell size="medium"> 제목 </StyledTableCell>
                        <StyledTableCell align="right">시작 날짜</StyledTableCell>
                        <StyledTableCell align="right">끝 날짜 </StyledTableCell>
                        <StyledTableCell align="right">건수</StyledTableCell>
                        <StyledTableCell align="right">비고 </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {record.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">
                                <NavLink to={`/past/detail/${row.id}`}>
                                    {row.title}
                                </NavLink>
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.startTime}</StyledTableCell>
                            <StyledTableCell align="right">{row.endTime}</StyledTableCell>
                            <StyledTableCell align="right">{row.recordNum}</StyledTableCell>
                            <StyledTableCell align="right">{row.etc}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
