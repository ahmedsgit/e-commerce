import { AppBar, Container, Link, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import useStyles from '../utils/styles';
import NextLink from 'next/link'

export default function Layout({ children}) {
    const classes =useStyles();
    return (
        <div>
            <Head>
                <title>E-commerce</title>
            </Head>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <NextLink href="/" passHref>
                        <Link style={ { textDecoration: 'none' } }>
                            <Typography className={classes.brand}>Cafe Nir</Typography>
                        </Link>
                    </NextLink>
                    <div className={classes.grow}></div>
                    <div>
                        <NextLink href="/Cart" passHref>
                            <Link style={ { textDecoration: 'none' } }>
                                Cart
                            </Link>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Link style={ { textDecoration: 'none' } }>
                                Login
                            </Link>
                        </NextLink>
                    </div>
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
