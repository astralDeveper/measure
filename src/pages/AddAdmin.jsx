import {  useState } from "react";
import { useNavigate } from "react-router-dom";

import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import PasswordStrengthBar from 'react-password-strength-bar';

import CircularLoader from "../components/Loader/loader";
import Modal from "../components/Modal";
import { fbSignUp, setId, getDocumentFromId } from "../firebase/firebase";
import "./Signup.css";

export default function AddAdmin() {

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    phone: "",
    password: "",
    type:'admin'
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fbSignUp(data);
      const doc = await getDocumentFromId("users", response.uid);
      setId(response.uid, doc.type);
      setLoading(false);
      navigate("/users");
    } catch (err) {
      console.log(err);
      if (err.message.includes("Firebase: Error (auth/email-already-in-use)")) {
        setError(true);
        setErrorMsg("This email is already in use. Please try another one.");
      }
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <CircularLoader />}
      {error && <Modal msg={errorMsg} open={error} setOpen={setError} />}
      <form className="container-signup" onSubmit={handleRegister}>
        <main className="main-signup">
          <div>
            <h1>Add Admin</h1>

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

              <FormControl sx={{
                width: "100%",
                '& .MuiInputBase-input.MuiInput-input, & .MuiFormLabel-root.MuiInputLabel-root': {
                  fontFamily: '"Outfit", sans-serif',
                },
                '& .MuiFormLabel-root.MuiInputLabel-root': {
                  color: '#38b038'
                }
              }}>
                <InputLabel htmlFor="phone">Phone</InputLabel>
                <Input
                  color="success"
                  id="phone"
                  onChange={handleChange}
                  name="phone"
                  label="Phone"
                  variant="standard"
                  required={true}
                  placeholder="+920-1234-5678"
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

              {
                data.password.length !== 0 &&
                <PasswordStrengthBar password={data.password} style={{ width: '30%', marginRight: 'auto' }} />
              }

              <button type="submit" className="submit-button">
                Register
              </button>
            </div>
          </div>
        </main>
      </form>
    </>
  );
}
