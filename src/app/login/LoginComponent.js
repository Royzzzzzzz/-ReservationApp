import Button from '@mui/material/Button';

export default function LoginComponent() {
    const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=YOUR_CLIENT_ID&scope=profile email&redirect_uri=YOUR_REDIRECT_URI&access_type=offline`;
    // 로그인 컴포넌트의 내용
    return (
        <>
            <Button
                fullWidth
                variant="outlined"
                sx={{ mt: 2 }}
                href={googleLoginUrl}
            >
                Google로 로그인
            </Button>
        </>
    )
}