import { Box, Button, TextField } from '@material-ui/core';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { CryptoState } from '../../CryptoContext';
import { auth } from '../../firebase'

const Register = ({ handleClose }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { setAlert } = CryptoState()

const handleSubmit = async () => {

    if (password !== confirmPassword) {
      setAlert({
        open: true,
        message: "Passwords do not match",
        type: "error",
      });
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setAlert({
        open: true,
        message: `Sign Up Successful. Welcome ${result.user.email}`,
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

  // const handleSubmit = async() => {
  //     if(password !== confirmPassword) {
  //       setAlert({
  //         open: true,
  //         message: "Passwords do not match",
  //         type: "error",
  //       })
  //       return;
  //     }
  //     try {
  //       const result = await createUserWithEmailAndPassword(
  //         auth, email, password,
  //       )
  //       console.log(result)
  //         setAlert({
  //           open: true,
  //           message: `Register Successful. Welcome to CryptoCasa ${ result.user.email }`,
  //           type: "success",
  //         });

  //       handleClose();
        
  //     } catch(err) {
  //         setAlert({
  //           open: true,
  //           message: err.message,
  //           type: "error",
  //         })
  //     }
  // }

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
        <TextField
        variant="outlined"
        type="password"
        label="Confirm Password"
        value={ confirmPassword }
        onChange={ (e) => setConfirmPassword(e.target.value)}
        fullWidth
        />

        <Button
          variant="contained"
          size="large"
          style={{ backgroundColor: "#81d4f9" }}
          onClick={ handleSubmit }
        >
          Submit
        </Button>
    </Box>
  )
}

export default Register