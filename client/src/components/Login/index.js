import React, { useState } from "react";
import { Container, Button, TextField, Box, FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './index.css'; // Import the CSS file

function Login() {
  const [loginType, setLoginType] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (type) => {
    setLoginType(type);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(loginType);
    console.log(username);
    console.log(password);
    if (loginType === "ifp-admin" && username === "ifp-admin" && password === "ifp-admin") {
      navigate("/home");
    } else if (loginType === "ifp-review" && username === "ifp-review" && password === "ifp-review") {
      navigate("/track-progress");
    } else if (loginType === "iffp-admin" && username === "iffp-admin" && password === "iffp-admin") {
      navigate("/faculty");
    } else if (loginType === "iffp-review" && username === "iffp-review" && password === "iffp-review") {
      navigate("/track-progress-faculty");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login">
      <div className="login-left">
        <img src="ssn.jpg" alt="Sign In" className="login-image" />
      </div>
      <div className="login-right">
        <Box component="form" onSubmit={onSubmit} sx={{ mt: 1, width: "100%", maxWidth: "400px" }}>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="login-type-label">Login Type</InputLabel>
            <Select
              labelId="login-type-label"
              id="login-type"
              value={loginType}
              label="Login Type"
              onChange={(e) => handleLogin(e.target.value)}
            >
              <MenuItem value="ifp-admin">IFP Admin Login</MenuItem>
              <MenuItem value="ifp-review">IFP Review Login</MenuItem>
              <MenuItem value="iffp-admin">IFFP Admin Login</MenuItem>
              <MenuItem value="iffp-review">IFFP Review Login</MenuItem>
              </Select>
          </FormControl>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Submit
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Login;
