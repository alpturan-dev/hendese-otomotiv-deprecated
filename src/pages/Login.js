import * as React from 'react';
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Toaster } from 'react-hot-toast';
import { login } from '../firebase'
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const { email, password } = useContext(UserContext);
    const { setEmail, setPassword } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const data = new FormData(event.currentTarget);
        const user = await login(data.get('email'), data.get('password'));
        console.log("User", user);
        if (user !== undefined) {
            setEmail(data.get('email'));
            setPassword(data.get('password'));
            localStorage.setItem('user', JSON.stringify({ email: data.get('email'), password: data.get('password') }))
            return navigate('/admin');
        }
        setIsLoading(false);
    };
    useEffect(() => {
        if (email !== null && password !== null) {
            return navigate('/admin');
        }
    })
    return (
        <>
            <Toaster position="top-right" />
            <Box sx={{ display: isLoading ? "none" : "block", bgcolor: "secondary.main" }}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: '10rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Giriş Yap
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="E-posta adresi"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Şifre"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Giriş Yap
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}