import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';


export default function DrawerComponent(props) {

    const theme = useTheme();
    const drawerWidth = 240;
    const handleDrawerClose = () => {
        props.setOpenState(false);
    };
    const drawerSx = {
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
        },
    }
    const tabsArr = ['Home', 'About Us', 'Jobs', 'Contact Us'];

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
        
      }));

    return (
        <>
            <Drawer
                sx={drawerSx}
                variant="persistent"
                anchor="right"
                open={props.open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronRightIcon />  
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {tabsArr.map((text, index) => (
                        <ListItem button key={text}>
                        <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

        </>
    )
}