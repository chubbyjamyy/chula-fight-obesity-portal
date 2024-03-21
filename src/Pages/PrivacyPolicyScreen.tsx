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
  
  export const PrivacyPolicyScreen = () => {
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
      <div className="privacy-policy-container">
        <HeaderMenuBar />
        <Container maxWidth="xs">
          
        </Container>
        <Footer />
      </div>
    );
  };
  
  export default PrivacyPolicyScreen;
  