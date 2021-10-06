import * as React from 'react';
import './Footer.css'
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

export default function FooterMobileComponent(props) {
    const useStyles = makeStyles(theme => ({
        background: {
            backgroundColor: "#eef4fb",
            height: "20vh",
            width: "100vw",
            bottom: 0
        }
    }));
    const classes = useStyles();
    return (
        <>
            <div className={classes.background} >
                <div className="mobilefoot">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                                <div className="icons">
                                    <FacebookIcon size="small" />&nbsp;
                                    <TwitterIcon size="small" />&nbsp;
                                    <InstagramIcon size="small" />
                                </div>
                        </Grid>
                        <Grid item xs={12}>
                                <text className="copy">Copyright © SPM global technology, Ltd. All Rights Reserved</text>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

