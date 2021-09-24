import * as React from 'react';
import DrawerComponent from '../Drawer/DrawerComponent';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from "@mui/material/Grid";
import Link from '@mui/material/Link';
import MuiAppBar from '@mui/material/AppBar';
import { makeStyles} from "@material-ui/core/styles";
import { styled, useTheme } from '@mui/material/styles';
import logo from '../../Images/logo.png';
import { red, green } from '@mui/material/colors';
import BannerComponent from '../Banner/BannerComponent';
import '../Header/Header.css';

export default function HeaderComponent() {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const drawerWidth = 240;
  const useStyles = makeStyles(theme => ({

    MenuIcon: {
     
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
      Menu:{
        [theme.breakpoints.down("sm")]: {
          display: "none"
      }
    }
  
  
   
  
  }));

  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    }),
  }));

  return (
    <>
     <div className="Bgcolor">
     <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            Responsive drawer
          </Typography>
          {/* <div noWrap sx={{ flexGrow: 1 }}>
            <img src={logo} width="140px" height="50px" />
          </div> */}
          <Grid container xs={9.5} className={classes.Menu}>
            <Grid item xs={1}><Link href="BannerComponent" color="inherit" underline="none">Home</Link></Grid>
            <Grid item xs={1.3}><Link href="#" color="inherit" underline="none">About Us</Link></Grid>
            <Grid item xs={1}><Link href="#" color="inherit" underline="none">Jobs</Link></Grid>
            <Grid item xs={1}><Link href="#" color="inherit" underline="none">Contact Us</Link></Grid>
          </Grid>
      
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}>
            <div className={classes.MenuIcon}><MenuIcon /></div>
          </IconButton>
        </Toolbar>
      </AppBar>
     </div>
      <DrawerComponent open={open} setOpenState={handleDrawerClose}></DrawerComponent>
      {/* <BannerComponent></BannerComponent> */}
    </>
  )
}