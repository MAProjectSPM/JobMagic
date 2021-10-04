import * as React from 'react';
import './Footer.css'
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SPM from '../../Images/SPM.png';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function FooterComponent(props) {
    const useStyles = makeStyles(theme => ({
        background: {
            backgroundColor: "#eef4fb",
            height: "35vh",
            width: "100%",
            bottom: 0
        },
        foot: {
            display: "flex"
        }
    }));
    const classes = useStyles();
    return (
        <>
            <div className={classes.background} >
                <div className="foot">
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <IconButton >
                                <div ><img src={SPM} width="130px" height="50px" /> </div>
                            </IconButton>
                                <br />&nbsp;
                                <div>
                                    <FacebookIcon size="small" />&nbsp;
                                    <TwitterIcon size="small" />&nbsp;
                                    <InstagramIcon size="small" />
                                </div>
                        </Grid>
                        <Grid item xs={2}>
                            <h5>Information</h5>
                                <ul className="li">
                                    <li>Home</li>
                                    <li>About us</li>
                                    <li>Jobs</li>
                                    <li>Contact us</li>
                                </ul>
                        </Grid>
                        <Grid item xs={2}>
                            <h5>Pages</h5>
                                <ul className>
                                    <li>Employer</li>
                                    <li>Accounts</li>
                                    <li>Profile</li>
                                    <li>Applied Jobs</li>
                                </ul>
                        </Grid>
                        <Grid item xs={2}>
                                <h5>Others</h5>
                                <ul >
                                    <li>Terms and conditions</li>
                                    <li>Privacy</li>
                                </ul>
                        </Grid>
                        <Grid item xs={12}>
                                <text>Copyright © SPM global technology, Ltd. All Rights Reserved</text>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

