//
import sytle from './loginForm.scss';

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {/*{'Copyright © '}*/}
            {/*<Link color="inherit" href="https://material-ui.com/">*/}
            {/*    Your Website*/}
            {/*</Link>{' '}*/}
            {/*{new Date().getFullYear()}*/}
            {/*{'.'}*/}
            @EWHA DEEPDEEP
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    body: {
        backgroundColor: "#0B0B3B",
    },
    logo: {
        marginTop: '1em',
        textAlign: 'center',
        fontSize: '5em',
    },
    back: {
        backgroundColor: "white",
        borderRadius: '0.5em',
        boxShadow: '3px 3px 3px black',
        marginTop: '150px',
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(3), // 여기다가 로고넣
        backgroundColor: "#0B0B3B",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    palette: {
        primary: '#0B0B3B',
    },
    item: {
        alignContent: 'right',
    },
}));




export default function SignIn() {

    const bodyElt = document.querySelector("body");
    bodyElt.style.backgroundColor = "#0B0B3B";

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" className = {classes.back}>
            <CssBaseline />
            <div className={classes.paper}>
                <div className = {classes.logo}>
                    시스템 제목
                </div>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    로그인
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="아이디"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="비밀번호"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    {/*<FormControlLabel*/}
                    {/*    control={<Checkbox value="remember" color="primary" />}*/}
                    {/*    label="Remember me"*/}
                    {/*/>*/}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        로그인
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        {/*    <Link href="#" variant="body2">*/}
                        {/*        비밀번호 찾기가필요한가?*/}
                        {/*    </Link>*/}
                        </Grid>
                        <Grid item xs>
                            <Link href="/signUp" variant="body2" justify="flex-end">
                                {"회원가입"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}