import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, Toolbar, Typography, ThemeProvider } from "@material-ui/core";
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CryptoState } from "../CryptoContext";
import AuthModel from "./Authentication/AuthModel";
import UserSidebar from "./Authentication/UserSidebar";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "#81d4f9",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  }
}));

export const Header = () => {

  const navigate = useNavigate();
  // useNavigate is new useHistory
  const classes = useStyles();

  const { user, currency, setCurrency } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  })

  console.log(`currency: ${currency}`)

  return (

  <ThemeProvider theme={darkTheme}>

    <AppBar color="transparent" position="static" >
      <Container>
        <Toolbar>
          <Typography
            variant="h6" 
            onClick={() => navigate("/", { replace: true })}
          className={classes.title}>
            Coin Hub
          </Typography>
      {user ? <UserSidebar /> : <AuthModel />}
    <Select variant="outlined"
      style={{
        width: 100,
        height: 40,
        marginRight: 15,
      }}
      value={ currency }
      onChange={(event) => setCurrency(event.target.value)}
    >
      <MenuItem value={"USD"}>USD</MenuItem>
      <MenuItem value={"ETH"}>ETH</MenuItem>
    </Select>
        </Toolbar>
      </Container>
    </AppBar>
  
  </ThemeProvider>
  )
}

export default Header;