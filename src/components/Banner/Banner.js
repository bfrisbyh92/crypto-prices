import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Carousel from './Carousel';

// let bannerBackground = require('../../Assets/banner2.jpeg')

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./banner2.jpg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

const Banner = () => {

    const classes = useStyles();

  return (
    <div className={ classes.banner }>
    <Container className={ classes.bannerContent }>
        <div className={ classes.tagline }>
            <Typography
                variant="h2"
                style={{
                    fontWeight: "normal",
                    marginBottom: 15,
                    fontFamily: 'Edu VIC WA NT Beginner',
                    fontSize: "10vh",
                    color: "#cccccc",
                }}
            >
                Coin Hub
            </Typography>
                      <Typography style={{ fontSize: 8  }}>@BrendanFrisby2022</Typography>
                <Typography
                    variant='subtitle2'
                    style={{
                        color: "darkgrey",
                        textTransform: 'capitalize',
                        fontFamily: 'Montserrat',
                        marginBottom: 10,
                        fontSize: "3vw",
                    }}
                >
            Get all the Info regarding your favorite Crypto
                </Typography>
                    
                <Typography
                    variant='subtitle2'
                    style={{
                        color: "#ccbc2f",
                        textTransform: 'capitalize',
                        fontFamily: 'Edu VIC WA NT Beginner',
                        marginBottom: 10,
                        fontSize: "4vw",
                    }}
                >
                    Top 10
                </Typography>
        </div>
            <Carousel />
    </Container>
    </div>
  )
}

export default Banner;