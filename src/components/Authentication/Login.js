import { Box, Button, TextField } from '@material-ui/core';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { CryptoState } from '../../CryptoContext';
import { auth } from '../../firebase'

const Login = ({ handleClose }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const { setAlert } = CryptoState();

  const handleSubmit = async(event) => {
    event.preventDefault()
    if(!email || !password) {
      setAlert({
        open: true,
        message: "Please enter all fields",
        type: "error",
      });
      return;
    }
    try{
      const result = await signInWithEmailAndPassword(auth, email, password);

      setAlert({
        open: true,
        message: `Login Successful. Welcome ${result.user.email}`,
        type: "success",
      });

        console.log('result:', result)
        handleClose();
    }

    catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
      return;
    }
  };

  return (
    <Box
      p={3}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        value={ email }
        onChange={ (e) => setEmail(e.target.value)}
        fullWidth
        />
        <TextField
        variant="outlined"
        type="password"
        label="Enter Password"
        value={ password }
        onChange={ (e) => setPassword(e.target.value)}
        fullWidth
        />

        <Button
          variant="contained"
          size="large"
          style={{ backgroundColor: "#EEBC1D" }}
          onClick={ handleSubmit }
        >
          Submit
        </Button>
        {/* ^^^ Note to come back here. Change button to be based off state. Show Login if no user, Logout if user is already logged in */}
    </Box>
  )
}

export default Login;