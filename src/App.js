import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box, 
  useScrollTrigger, 
  Slide,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Body } from "./Components/Body/Body";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appearance="in" direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const App = () => {
  const [currScreen, setCurrScreen] = useState('About Me');
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = ['About Me', 'Experience', 'Projects', 'Contact Me'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (item) => {
    setCurrScreen(item);
    if (mobileOpen) setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        M Mohsin Sackeer
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Button 
              fullWidth 
              onClick={() => handleNavClick(item)}
              sx={{ color: currScreen === item ? 'primary.main' : 'inherit' }}
            >
              <ListItemText primary={item} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HideOnScroll>
        <AppBar component="nav" color="default" elevation={1}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontWeight: 'bold' }}
            >
              M Mohsin Sackeer
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {navItems.map((item) => (
                <Button 
                  key={item} 
                  onClick={() => handleNavClick(item)}
                  sx={{ 
                    color: currScreen === item ? 'primary.main' : 'text.primary',
                    fontWeight: currScreen === item ? 'bold' : 'normal',
                    mx: 1
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 0, pt: { xs: 8, md: 10 }, flexGrow: 1 }}>
        <Body currScreen={currScreen} />
      </Box>
    </Box>
  );
};

export default App;
