import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import {NavLink, useHistory} from "react-router-dom";
import {Router} from "@material-ui/icons";


//
// const images = [
//     {
//         url: 'https://cdn.pixabay.com/photo/2015/06/08/15/11/camera-801924_960_720.jpg',
//         title: '촬영하러 가기',
//         width: '40%',
//         imageLink: '/startCam',
//     },
//     {
//         url: 'https://cdn.pixabay.com/photo/2016/12/29/21/17/notebook-1939358_960_720.jpg',
//         title: '과거기록 보기',
//         width: '40%',
//         imageLink: '/past',
//     },
//
// ];

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        //display: 'flex',
        //flexWrap: 'wrap',
        minWidth: 300,
        // marginTop: '10%',
        justifyContent: 'center',
        alignContent: 'center'
    },
    text: {
        textAlign:"center",
        marginTop: "10%",
        fontSize: "5em",
        fontWeight: "bold"
    },
    movehome: {
        cursor: "pointer",
        textAlign:"center",
        textDecoration: "underline",
        textDecorationPosition: "under",
    }
}));

export default function ButtonBases() {
    const classes = useStyles();
    const history = useHistory();

    const bodyElt = document.querySelector("body");
    bodyElt.style.backgroundColor = "white";

    // if (!sessionStorage.getItem("token")) {
    //     alert("로그인이 필요한 서비스입니다.");
    //     history.push('/');
    // }

    return (
        <div className={classes.root}>
            <h3 className={classes.text}>Not Found</h3>
            <h3 className={classes.movehome} onClick={(e)=>{
                history.push("/")
            }}>
                홈으로 이동하기
            </h3>
        </div>
    );
}