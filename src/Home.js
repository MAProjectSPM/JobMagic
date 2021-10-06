import * as React from 'react';
import Typography  from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core/styles";
import HeaderComponent from './Components/Header/HeaderComponent';
import BannerComponent from './Components/Banner/BannerComponent';
import SearchbarComponent from './Components/Searchbar/SearchbarComponent';
import banner from "./Images/banner.jpg";
import banner2 from "./Images/banner2.jpg";
import logo from "./Images/logo.png";
import MobileSearchComponent from './Components/Searchbar/MobileSearchComponent';
import CarouselComponent from './Components/carousel/CarouselComponent';
import ImageBannerComponent from './Components/ImageBanner/ImageBannerComponent';
import ImageBannerComponentMobile from './Components/ImageBanner/ImageBannerComponentMobile';
import RecruitingComponent from './Components/RecruitingComponent/RecruitingComponent';
import FooterComponent from './Components/FooterComponent/FooterComponent';
import FooterMobileComponent from './Components/FooterComponent/FooterMobileComponent';
import Button from '@mui/material/Button';
import './App.css';

export default function PersistentDrawerRight() {
  const bannerHeight = "65vh";
  const bannerWidth = "100vw";
  const bannertop="65px";


  const useStyles = makeStyles(theme => ({
    Image: {
      marginTop:"55px",  
      [theme.breakpoints.up("sm")]: {
        display: "none",
      }
    },
      Banner:{
        [theme.breakpoints.down("xs")]: {
          display: "none"
      }
    },
    Compimg: {
      
      [theme.breakpoints.up("sm")]: {
        display: "none",
      }
    },
      Comp:{
        [theme.breakpoints.down("xs")]: {
          display: "none"
      }
    },
    recShadow:{
      [theme.breakpoints.down("xs")]: {
        display: "none"
      }
    },
    recShadow1:{
      [theme.breakpoints.up("sm")]: {
        display: "none"
      }
    },
    Foot:{
      [theme.breakpoints.down("xs")]: {
        display: "none"
      }
    },
    Mobfoot:{
      [theme.breakpoints.up("sm")]: {
        display: "none"
      }
    }
  }));
  const classes = useStyles();
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className={classes.Banner}>
      <BannerComponent  bannerImage={banner} bannerHeight={bannerHeight} bannerWidth={bannerWidth}  bannertop={bannertop}>
        <div className="bannertext">
        <Typography variant="h4">WELCOME TO THE PROFESSIONAL WORLD <br /><span className="text2">Explore to find the right job for you</span></Typography>
        </div>
        <div className="searchDiv">
          <SearchbarComponent></SearchbarComponent>
        </div>
      </BannerComponent>
      </div>
      <div className={classes.Image}>
      <BannerComponent  bannerImage={banner2} bannerHeight={bannerHeight} bannerWidth={bannerWidth}>
      <div className="mobiletext">
        <Typography variant="h4">WELCOME TO THE PROFESSIONAL WORLD <br /><span className="text3">Explore to find the right job for you</span></Typography>
        </div>
        <div>
          <MobileSearchComponent></MobileSearchComponent>
        </div>
        </BannerComponent>
      </div>
      <div className={classes.Comp}>
        <ImageBannerComponent></ImageBannerComponent>
      </div>
      <div className={classes.Compimg}>
        <ImageBannerComponentMobile></ImageBannerComponentMobile>
      </div>
      <div className={classes.recShadow}>
        <RecruitingComponent>
        <div className="button">
            <Button variant="outlined" color="inherit" size="large">START RECRUITING</Button>
        </div>
          <div className="rectext">
            <Typography variant="h4"><span className="text4">Recruiting?</span> Advertise your jobs to  millions of monthly users and search applicaticants in our Database. </Typography>
        </div>
       
        </RecruitingComponent>
      </div>
      <div className={classes.recShadow1}>
        <RecruitingComponent >
        <div className="button1">
            <Button variant="outlined" color="inherit" size="small">START RECRUITING</Button>
          </div>
          <div className="rectext1">
            <Typography variant="h5"><span className="text5">Recurting?</span> Advertise your jobs to  millions of monthly users and serach applicaticants in our Database. </Typography>
          </div>
        </RecruitingComponent>
      </div>
      <div> 
        <CarouselComponent></CarouselComponent>
      </div><br />
      <div className={classes.Foot}>
      <FooterComponent></FooterComponent>
      </div>
      <div className={classes.Mobfoot}>
          <FooterMobileComponent></FooterMobileComponent>
      </div>
    </>
    
      
  );
}
