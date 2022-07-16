import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, Toolbar, Typography, ThemeProvider } from "@material-ui/core";
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  }
}));

export const Header = () => {

  const navigate = useNavigate();
  // useNavigate is new useHistory
  const classes = useStyles();

  const { currency, setCurrency } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  })

  console.log(currency)

  return (

  <ThemeProvider theme={darkTheme}>

    <AppBar color="transparent" position="static" >
      <Container>
        <Toolbar>
          <Typography
            variant="h6" 
            onClick={() => navigate("/", { replace: true })}
          className={classes.title}>
            Crypto Home
          </Typography>
          <Typography style={{ marginRight: '5vh',  }}>@BrendanFrisby2022</Typography>
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