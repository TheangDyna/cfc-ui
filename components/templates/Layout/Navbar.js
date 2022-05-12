import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    Box,
    Button,
    Container,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

// icon
import MenuIcon from '@mui/icons-material/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'fixed',
    }
}));

//static data
const pages = ['Products', 'Pricing', 'Blog'];

const Navbar = ( props, {
    children
}) => {
    const classes = useStyles();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className={classes.root}>
            <CssBaseline />
            <AppBar
                position='fixed'

            >
                <Container maxWidth='xl'>
                    <Toolbar>
                        <IconButton
                            edge='start'
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    // onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: '80%', flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
               
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '80%' },
                    }}
                >
                    <div>
                        <Toolbar sx={{ background: 'red'}}/>
                        <Divider />
                        <List>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <MenuIcon /> : <MenuIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <MenuIcon /> : <MenuIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
            </Box>
            {children}
        </Box>
    );
}

Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
export default Navbar;

Navbar.propTypes = {

};

Navbar.defaultProps = {

};