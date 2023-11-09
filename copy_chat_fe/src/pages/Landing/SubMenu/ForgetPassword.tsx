import { Link } from "react-router-dom";
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
import { AccountCircle, EmailOutlined, Key } from "@mui/icons-material";
import Wrapper from "../../../components/share/Wrapper";


export default function ForgetPassword() {
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
              Reset your password
            </Typography>

            <FormLabel style={{fontSize: "0.9em"}}>
              Enter your email address and we will send you a new password
            </FormLabel>

            <form action="">
              <FormControl sx={{ padding: 2 }}>
                <TextField
                  type="email"
                  name="email"
                  autoComplete="email"
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
                  required
                />
                <Button type="submit" variant="outlined">
                  Send password reset email
                </Button>
              </FormControl>
            </form>

            <footer>
              <Typography variant="body2">
                <Typography variant="inherit">
                  <Link to="/">
                    <Button variant="text">return to login menu</Button>
                  </Link>
                </Typography>
                <Typography variant="inherit">
                  <Link to="/register/">
                    <Button variant="text">Create an account</Button>
                  </Link>
                </Typography>
              </Typography>
            </footer>
          </Grid>
        </div>
      </Wrapper>
  );
}
