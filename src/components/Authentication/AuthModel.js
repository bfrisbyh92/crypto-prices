import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { AppBar, Box, Button, Tab, Tabs } from '@material-ui/core';
import Login from '../Authentication/Login'
import Register from '../Authentication/Register'
import Other from '../Authentication/Other'
import GoogleButton from 'react-google-button';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import { CryptoState } from '../../CryptoContext';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: "white",
    borderRadius: 15,
  },
  google: {
    padding: 24,
    paddingTop: 0,
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    gap: 20,
    fontSize: 20,
  },
}));

export default function AuthModal() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);

    const { setAlert } = CryptoState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    console.log(`value: ${value}`);


  
  const handleOpen = () => {
    setOpen(true);
  };

  const signInWithGoogle = () => {

    signInWithPopup(auth, googleProvider).then(res => {
      
      setAlert({
        open: true,
        message: `Sign up Successful. Welcome ${res.user.email}`,
        type: 'success',
      });
      handleClose();
    }).catch(err => {
      setAlert({
        open: true,
        message: err.message,
        type: 'error',
      });
      return;
    })
  };

  const googleProvider = new GoogleAuthProvider()

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained"
        style={{
            width: 85,
            height: 40,
            marginLeft: 15,
            backgroundColor: "#81d4f9",  
        }}
            onClick={handleOpen}
        >
            Login
        </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
               <AppBar
                position="static"
                style={{ backgroundColor: "transparent", color: "white" }}
                >
                    <Tabs
                        value={ value }
                        onChange={ handleChange }
                        variant="fullWidth"
                        style={{ borderRadius: 10 }}
                    >
                        <Tab label="Login" />
                        <Tab label="Register" />
                        {/* <Tab label="Other" /> */}
                        {/* ^^^ Add signInWithPhoneNumber and other sign in methods */}
                    </Tabs>
                </AppBar>

                { value === 0 && <Login handleClose={handleClose} /> } 
                { value === 1 && <Register handleClose={handleClose} /> }
                {/* { value === 2 && <Other handleClose={handleClose} /> } */}
                <Box className={classes.google}>
                    <span>OR</span>
                      <GoogleButton
                        style={{ width: "100%", outline: "none" }}
                        onClick={ signInWithGoogle }
                    />
                </Box>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
