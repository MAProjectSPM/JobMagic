import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import HeaderComponent from './Components/Header/HeaderComponent';
import BannerComponent from './Components/Banner/BannerComponent';
import SearchbarComponent from './Components/Searchbar/SearchbarComponent';
import banner from "./Images/banner.jpg";
import banner2 from "./Images/banner2.jpg";
// import banner2 from "../../Images/banner2.jpg";

const drawerWidth = 240;
export default function PersistentDrawerRight() {
  const bannerHeight = "300px";
  const bannerWidth = "100%";

  return (
    <>
      {/* <HeaderComponent></HeaderComponent> */}
      <BannerComponent bannerImage={banner} bannerHeight={bannerHeight} bannerWidth={bannerWidth}>
      "sadasdasdads"
      </BannerComponent>
      <BannerComponent bannerImage={banner2} bannerHeight={bannerHeight} bannerWidth={bannerWidth}>
        <div className="searchDiv">
          <SearchbarComponent></SearchbarComponent>
        </div>
        
      </BannerComponent>
    </>
  );
}
