import React, { useState } from 'react';
import { IconButton, Drawer, Box, Stack, Divider, List, ListItemButton, ListItemText, ListItem, Link } from '@mui/material';
import Image from './core/Image';
import MenuIcon from '@mui/icons-material/Menu';
import Btn from './core/Btn';

const Header = ({triggerAction}) => {
    const [open, openMenu] = useState(false);

    return (
        <>
            <Stack direction="row" alignItems="center" sx={{mx: 4, pt: 1}}>
                <IconButton size="large" color="inherit" onClick={() => openMenu(true)} sx={{display: {xs: 'block', md: 'none'}}}>
                    <MenuIcon />
                </IconButton>
                <Link href="/" sx={{textAlign: {xs: 'center', md: 'left'}, flexGrow: {xs: 1, md: 0}, mr: '48px'}}>
                    <Image type="logo" src="/assets/bimcodes-logo-color.png" alt="BIMCodes Logo Color" />
                </Link>
                <Box sx={{display: {xs: 'none', md: 'block'}, flexGrow: 1}} />
                <Stack direction="row" alignItems="center" sx={{display: {xs: 'none', md: 'flex'}}}>
                    <Link href="/find-out-more" underline="none" color="#424242" sx={{mx: 2}}>
                        Find Out More
                    </Link>
                    <Link href="/contact" underline="none" color="#424242" sx={{mx: 2}}>
                        Contact Us
                    </Link>
                    <Btn children="Sign Up Now" sx={{ml: 2}} onClick={() => triggerAction()} />
                </Stack>
            </Stack>
            <Divider sx={{my: 2, mx: 2}} />
            <Drawer open={open} onClose={() => openMenu(false)} PaperProps={{sx: {height: 'fit-content', minWidth: 220}}}>
                <List>
                    <ListItem>
                        <ListItemButton href="/find-out-more" component="a">
                            <ListItemText primary="Find Out More" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton href="/contact" component="a">
                            <ListItemText primary="Contact Us" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <Btn children="Sign Up Now" sx={{mx: 2, mb: 1}} onClick={() => triggerAction()} />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}

export default Header;
