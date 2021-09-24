import * as React from 'react';
import Typography  from '@mui/material/Typography';
import { makeStyles} from "@material-ui/core/styles";
import SearchbarComponent from '../Searchbar/SearchbarComponent';


export default function BannerComponent(props){

    const useStyles = makeStyles(theme => ({
        banner: {
          [theme.breakpoints.down("sm")]: {
            display: "none"
          }
        },
        banner2:{
            [theme.breakpoints.up("md")]: {
              display: "none"
          }
        },
        bannerBackground:{
          backgroundImage: `url(${props.bannerImage})`,
          height: props.bannerHeight,
          width: props.bannerWidth
        }

      
    }));
    const classes = useStyles();
      

    return(
        <>
           <div className={classes.bannerBackground} >
              {props.children}
            </div>        
        </>
    )
}