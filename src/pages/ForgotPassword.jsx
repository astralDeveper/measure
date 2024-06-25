import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

import Footer from "../components/Footer";
import CircularLoader from "../components/Loader/loader";
import { passwordReset } from "../firebase/firebase";
import "./Signup.css";

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ email: "" });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await passwordReset(data.email);

      setLoading(false);
      setModalOpen(true)
      setModalMsg('Your email has been sent. Check your inbox.')
    } catch (err) {
      setModalOpen(true)
      setModalMsg('Something went wrong. Try again later.')
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <CircularLoader />}
      <form className="container-signup" onSubmit={sendEmail}>
        <main className="main-signup">
          <div>
            <h1>Reset Password</h1>

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
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  name="email"
                  label="Email"
                  variant="standard"
                  required={true}
                  placeholder="email@gmail.com"
                />
              </FormControl>
              
              <button type="submit" className="submit-button">
                Send email
              </button>

              <Dialog open={modalOpen} onClose={() => setModalOpen(false)} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title" className='dialog-header' sx={{ '&.MuiTypography-root.MuiDialogTitle-root': { fontFamily: 'inherit' } }}>
                  {modalMsg}
                </DialogTitle>

                <DialogActions>
                  <button onClick={() => setModalOpen(false)} autoFocus className="action-btn">Ok</button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </main>
      </form>

      <Footer />
    </>
  );
}
