import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@mui/material/IconButton';
import tcs from '../../Images/tcs.png';
import apple from '../../Images/apple.png';
import wipro from '../../Images/wipro.png';
import bosch from '../../Images/bosch.png';
import ibm from '../../Images/ibm.png';
import google from '../../Images/google.png';
import './ImageBanner.css';

export default function ImageBannerComponent(props) {
    const useStyles = makeStyles(theme => ({


    }));
    const classes = useStyles();
    return (
        <>
            <div className='imagebanner'>
                <IconButton>
                    <div className='company'> <img src={tcs} width="150px" height="50px" /></div>
                    <div className='company'><img src={wipro} width="150px" height="50px" /></div>
                    <div className='company'><img src={apple} width="150px" height="50px" /></div>
                    <div className='company'><img src={bosch} width="150px" height="50px" /></div>
                    <div className='company'><img src={ibm} width="150px" height="50px" /></div>
                    <div className='company'><img src={google} width="150px" height="50px" /></div>
                    <div className='company'><img src={apple} width="150px" height="50px" /></div>
                    <div className='company'><img src={google} width="150px" height="50px" /></div>
                </IconButton></div>
        </>
    )
}