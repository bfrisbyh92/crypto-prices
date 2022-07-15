import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react'

let bannerBackground = require('../../Assets/banner2.jpeg')

const useStyles = makeStyles(() => ({
        banner: {
            backgroundImage: `url(${bannerBackground})`,
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
                    fontFamily: 'Luxurious Script',
                }}
            >
                Crypto Hunter
            </Typography>
                <Typography
                    variant='subtitle2'
                    style={{
                        color: "darkgrey",
                        textTransform: 'capitalize',
                        fontFamily: 'Montserrat',
                    }}
                >
            Get all the Info regarding your favorite Crypto
                </Typography>
        </div>
    </Container>
    </div>
  )
}

export default Banner