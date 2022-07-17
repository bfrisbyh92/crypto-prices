import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { AppBar, Button, Tab, Tabs } from '@material-ui/core';
import Login from '../Authentication/Login'
import Register from '../Authentication/Register'
import Other from '../Authentication/Other'

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
}));

export default function AuthModal() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    console.log(value);
  
  const handleOpen = () => {
    setOpen(true);
  };

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
            backgroundColor: "#EEBC1D",  
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
                        variant="fullwidth"
                        style={{ borderRadius: 10 }}
                    >
                        <Tab label="Login" />
                        <Tab label="Register" />
                        <Tab label="Other" />
                        {/* ^^^ Add signInWithPhoneNumber and other sign in methods */}
                    </Tabs>
                </AppBar>

                { value === 0 && <Login handleClose={handleClose} /> } 
                { value === 1 && <Register handleClose={handleClose} /> }
                { value === 2 && <Other handleClose={handleClose} /> }

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
