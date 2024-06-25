import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import PasswordStrengthBar from 'react-password-strength-bar';

import Footer from "../components/Footer";
import CircularLoader from "../components/Loader/loader";

import "./Signup.css";
import { LoginUser, auth, getDocumentFromId, setId } from "../firebase/firebase";

export default function Signin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await LoginUser(auth, data.email, data.password);
      const doc = await getDocumentFromId("users", response.uid);
      setId(response.uid, doc?.type);
      setLoading(false);
      if (doc?.type === 'admin') {
        navigate("/users");
      }
      if (doc?.type === 'user') {
        navigate(`/profile`);
      }
    } catch (err) {
      if (err.message.includes('Firebase: Error (auth/invalid-credential)')) {
        setModalOpen(true)
        setErrorMsg('Email or password is incorrect. Please try again.')
      }
      console.log(err);
      setLoading(false);
    }
  };


  return (
    <>
      {loading && <CircularLoader />}
      <form className="container-signup" onSubmit={handleLogin}>
        <main className="main-signup">
          <div>
            <h1>Sign In</h1>

            <div className="input-fields">
              <FormControl sx={{
                width: "100%",
                '& .MuiInputBase-input.MuiInput-input, & .MuiFormLabel-root.MuiInputLabel-root': {
                  fontFamily: '"Outfit", sans-serif',
                },
                '& .MuiFormLabel-root.MuiInputLabel-root': {
                  color: '#38b038'
                }
              }}>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  color="success"
                  id="email"
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  variant="standard"
                  required={true}
                  placeholder="email@gmail.com"
                />
              </FormControl>

              <FormControl
                sx={{
                  width: "100%",
                  '& .MuiInputBase-input.MuiInput-input, & .MuiFormLabel-root.MuiInputLabel-root': {
                    fontFamily: '"Outfit", sans-serif',
                  },
                  '& .MuiFormLabel-root.MuiInputLabel-root': {
                    color: '#38b038'
                  }
                }}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  color="success"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  label="Password"
                  variant="standard"
                  placeholder="******"
                  type={showPassword ? 'text' : 'password'}
                  required={true}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end" >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <Link to="/forgot-password">
                Forgot your password?
              </Link>

              <button type="submit" className="submit-button">
                Login
              </button>

              <Dialog open={modalOpen} onClose={() => setModalOpen(false)} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title" className='dialog-header' sx={{ '&.MuiTypography-root.MuiDialogTitle-root': { fontFamily: 'inherit' } }}>
                  {errorMsg}
                </DialogTitle>

                <DialogActions>
                  <button onClick={() => setModalOpen(false)} autoFocus className="action-btn">Ok</button>
                </DialogActions>
              </Dialog>

              <p className="text">
                Don't have an account yet?{" "}
                <Link to="/register">Sign up.</Link>
              </p>
            </div>
          </div>
        </main>
      </form>
      <Footer />
    </>
  );
}
