import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import dynamic from 'next/dynamic';
import LoginForm from './LoginForm';

// const LoginComponent = dynamic(() => import('./LoginComponent.js'), { ssr: false });

export default function Login() {

    return (
        <Container maxWidth="sm">
            <LoginForm/>
            {/* <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    로그인
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                   */}
                    {/* <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="사용자 이름"
                        name="username"
                        autoComplete="username"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="비밀번호"
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
                        로그인
                    </Button> */}
                    {/* <LoginComponent /> */}
                {/* </Box>
            </Box> */}

        </Container>
    );
}
