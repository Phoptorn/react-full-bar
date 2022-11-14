import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
// import Image from "./cover.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        // backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

async function loginUser(credentials) {
    // return fetch('https://www.mecallapi.com/api/login', {
    return fetch('https://rdai.dsi.go.th/api/pf/auth/login', {
        // return fetch('http://localhost/FakeDB_Login', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Signin() {
    const classes = useStyles();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
            "login_UUID": "123",
            "login_Username": username,
            "login_Password": password
        });
        if (response["status"]["status_code"] === "200") {
            console.log(response["status"]["status_code"])
            localStorage.setItem("user_Token", response["data"]["token"]);
            localStorage.setItem("data", JSON.stringify(response["data"]));
            console.log(response["data"])
            // window.location.href = "/profile";
            // window.location.href = "/home";
            window.location.href = "/home";

        } else {
            swal("กรุณาตรวจสอบชื่อผู้ใช้งานและรหัสผ่าน", "", "error");
        }

        // if ('user_Token' in response['data']) {
        //     swal("Success", response.message, "success", {
        //         buttons: false,
        //         timer: 2000,
        //     })

        //         .then((value) => {
        //             localStorage.setItem('user_Token', response['user_Token']);
        //             localStorage.setItem('user', JSON.stringify(response['user']));
        //             localStorage.setItem('data', JSON.stringify(response['data']));
        //             window.location.href = "/profile";

        //         });
        // } else {
        //     swal("Failed", response.message, "error");
        // }
    }

    return (
        <Grid container className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} md={7} className={classes.image} />
            <Grid item xs={12} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        DSI Chat Platform
                    </Typography>
                    <Typography component="h1" variant="h5">
                        เเพลตฟอร์มระบบสนทนาอัตโนมัติ
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            name="username"
                            label="บัญชีผู้ใช้"
                            onChange={e => setUserName(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            name="password"
                            label="รหัสผ่าน"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            เข้าสู่ระบบ
                        </Button>
                    </form>

                </div>
            </Grid>
        </Grid>
    );
}