import * as React from 'react';
import DrawerComponent from '../Drawer/DrawerComponent';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from "@mui/material/Grid";
import Link from '@mui/material/Link';
import MuiAppBar from '@mui/material/AppBar';
import { Button } from '@mui/material';
import { makeStyles} from "@material-ui/core/styles";
import { styled, useTheme } from '@mui/material/styles';
import logo from '../../Images/logo.png';
import '../Header/Header.css';

export default function HeaderComponent() {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const drawerWidth = 240;
  const useStyles = makeStyles(theme => ({

    MenuIcon: {
       marginLeft: "45vw",
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
      Menu:{
        [theme.breakpoints.down("sm")]: {
          display: "none"
      },
      [theme.breakpoints.up("md")]: {
        display: "contents"
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
     <AppBar className="appbar" open={open}>
        <Toolbar>
        <IconButton >
        <div className="logo"><img src={logo} width="130px" height="50px"/> </div>
          </IconButton>
        <div className={classes.Menu}>
          <Grid container className="menu" >
            <Grid item className="menus"><Link href="BannerComponent" color="inherit" underline="none">Home</Link></Grid>
            <Grid item className="menus"><Link href="#" color="inherit" underline="none">About Us</Link></Grid>
            <Grid item className="menus"><Link href="#" color="inherit" underline="none">Jobs</Link></Grid>
            <Grid item className="menus"><Link href="#" color="inherit" underline="none">Contact Us</Link></Grid>
          </Grid>
          </div>
          <div className="sign">
            <Button variant="outlined" size="medium">Sign&nbsp;In</Button>
          </div>
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
    </>
  )
}