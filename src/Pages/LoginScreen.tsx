import {
  Container,
  CssBaseline,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginScreen.css";
import HeaderMenuBar from "../HeaderMenuBar";
import Footer from "../Footer";
import loginLogo from "../asset/loginLogo.png"
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    navigate('/Dashboard');
  };

  return (
    <div className="login-container">
      <HeaderMenuBar />
      <Container maxWidth="xs">
        <Box
          className="login-form"
          sx={{
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={loginLogo}/>
          <Box  component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#098484",
                color: "white",
                "&:hover": {
                  backgroundColor: "#098484",
                },
              }}
              type="submit"
            >
              เข้าสู่ระบบ
            </Button>
            {/* <Grid container justifyContent={"flex-end"}>
              <Grid item>
                <Link to="/register">Don't have an account? Register</Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default LoginScreen;
