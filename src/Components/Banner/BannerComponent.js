import * as React from 'react';
import Typography  from '@mui/material/Typography';
import banner from "../../Images/banner.jpg";
import banner2 from "../../Images/banner2.jpg";
import { makeStyles} from "@material-ui/core/styles";
import SearchbarComponent from '../Searchbar/SearchbarComponent';


export default function BannerComponent(){

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
        }
      
    }));
    const classes = useStyles();
      

    return(
        <>
           <div>
            <img src={banner} className={classes.banner} height="375px" width="100%" />
            <img src={banner2} className={classes.banner2} height="375px" width="100%" />
            <Typography variant="h4">WELCOME TO THE PROFESSIONAL WORLD<span>EXPLORE TO FIND THE THE RIGHT JOBS FOR YOU</span></Typography>
            
            </div>        
        </>
    )
}