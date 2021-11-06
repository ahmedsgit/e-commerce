import { Typography } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Link from "next/link";
import React from 'react';
import useStyles from '../utils/styles';
export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={ classes.footer }>

            <div style={{display:'flex',height:'50px',marginBottom:'20px'}}></div>
            <div style={{width:'20rem'}}></div>
            <div className={ classes.row }>
                <Typography className={ classes.column }>
                    <Typography className={ classes.brand }>Cafe Nir</Typography>
                    <p>Blow your mind with our products</p>
                </Typography>
            </div>
            <div className={ classes.row }>
                <Typography className={ classes.column }>
                    <h3>Office</h3>
                    <address>New Chasara, Jamtola, Dhaka, Bangladesh</address>
                    <p style={ { letterSpacing:'1px',margin:'-3px',}}>cafenir@gmail.com</p>
                    <p style={ { letterSpacing: '3px', margin: '-3px', } }>
                        +880123454677
                    </p>
                </Typography>
            </div>
            <div className={ classes.row }>
                <Typography className={ classes.column } style={{display:'flex',flexDirection:'column',alignContent:'center',flexWrap:'wrap'}}>
                    <h3>Links</h3>
                    <ul className={classes.footerLinks}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">Service</Link></li>
                        <li><Link href="/">About Us</Link></li>
                    </ul>
                </Typography>
            </div>
            <div className={ classes.row }>
                <Typography className={ classes.column }>
                    <h3>Contact Us</h3>
                    <form style={ { display: 'flex', position: 'relative', flexDirection:'row', alignItems: 'center',justifyContent:'space-betweeen',borderBottom:'1px solid #ccc',marginBottom:'50px'}}>
                        <EmailIcon style={ { position: 'absolute', color:'#fff'}}></EmailIcon>
                        <input type="email" placeholder="Email us" style={ { width: '100%', background: 'transparent', color:'#fff',border:'0',outline:'none'}} required/>
                    </form>
                </Typography>
                <Typography className={ classes.column } style={{display:'flex',justifyContent:'space-between',color:'#fff'}}>
                    <FacebookIcon style={{marginRight:'15px'}}></FacebookIcon>
                    <InstagramIcon style={{marginRight:'15px'}}></InstagramIcon>
                    <FacebookIcon style={{marginRight:'15px'}}></FacebookIcon>
                    <InstagramIcon style={{marginRight:'15px'}}></InstagramIcon>
                </Typography>
            </div>
            <div style={ { position: 'absolute', bottom: '0',color:'#fff',display:'flex', justifyContent:'center', width:'100%'}}>
                <p style={ { letterSpacing:'2px',margin:'5px' } }>All rights @cafenir.com</p>
            </div>
        </footer>
    )
}
