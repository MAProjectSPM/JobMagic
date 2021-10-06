import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@mui/material/IconButton';
import tcs from '../../Images/tcs.png';
import wipro from '../../Images/wipro.png';
import bosch from '../../Images/bosch.png';
import ibm from '../../Images/ibm.png';
import './ImageBanner.css';

export default function ImageBannerComponent(props) {
    return (
        <>
            <div className="mobile">
                <IconButton>
                    <div><img src={tcs} width="98vw" height="50px" /></div>
                    <div><img src={wipro} width="98vw" height="50px" /></div>
                    <div><img src={bosch} width="98vw" height="50px" /></div>
                    <div><img src={ibm} width="98vw" height="50px" /></div>
                </IconButton>
            </div>



        </>
    )
}