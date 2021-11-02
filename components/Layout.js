import React, { Children } from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layout({ children}) {
    const classes =useStyles();
    return (
        <div>
            <Head>
                <title>E-commerce</title>
            </Head>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Typography>Cafe Nir</Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>All right reserve @PickADiet</Typography>
            </footer>
        </div>
    )
}
