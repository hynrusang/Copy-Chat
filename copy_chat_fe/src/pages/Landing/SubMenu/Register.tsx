import { AccountCircle, EmailOutlined, Key } from "@mui/icons-material";
import {
  Checkbox,
  FormControl,
  FormLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  Link as Mlink,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Wrapper from "../../../components/share/Wrapper";
import { registerUser } from "../../../store/be_call/auth";
import { Store } from "../../../types/store";

export default function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isCreated = useSelector((s: Store.AppState) => s.auth.hasCreated);

  const handleRegister = async (e: any) => {
    e.preventDefault();
    const payload = {
      username: username,
      email: email,
      password: password,
    };
    registerUser(payload, dispatch);
  };

  if (isCreated) {
    return (
      <Wrapper>
        <Navigate to={`/`} />;
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div className="register-wrapper">
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            spacing={12}
            sx={{ marginTop: 6 }}
          >

            <Typography variant="h4" sx={{ py: 3 }}>
              Create your account
            </Typography>

            <form onSubmit={handleRegister}>
              <FormControl sx={{ padding: 2 }}>
                <TextField
                  id="username"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  label="Account id"
                  required
                  variant="outlined"
                  placeholder="Username"
                  sx={{ p: 2 }}
                />
                <TextField
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlined />
                      </InputAdornment>
                    ),
                  }}
                  label="Email"
                  variant="outlined"
                  placeholder="Email"
                  sx={{ p: 2 }}
                />
                <TextField
                  id="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Key />
                      </InputAdornment>
                    ),
                  }}
                  type="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  required
                  variant="outlined"
                  placeholder="Password"
                  sx={{ p: 2 }}
                />
                <FormLabel style={{fontSize: "0.9em"}}>
                  <span>
                    I agree all statements in{" "}
                    <Mlink href="https://google.com">terms of service</Mlink>
                  </span>
                  <Checkbox required={true}></Checkbox>
                </FormLabel>
                <Button type="submit" variant="outlined">
                  Register
                </Button>
              </FormControl>
            </form>

            <footer>
              <Typography variant="body2">
                Did you forgot password? <br />
                <Link to="/">
                  <Button variant="text">Back to Login Page.</Button>
                </Link>
              </Typography>
            </footer>
          </Grid>
        </div>
      </Wrapper>
    );
  }
}
