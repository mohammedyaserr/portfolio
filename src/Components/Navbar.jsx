import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, Mail, Zap, Menu as MenuIcon, X } from 'lucide-react';
import { 
  GitHub, 
  LinkedIn, 
  Email,
  Close as CloseIcon
} from '@mui/icons-material';
import { 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  useMediaQuery,
  useTheme,
  Box
} from '@mui/material';
import './Navbar.css';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  const navItems = [
    { name: 'About', icon: <User size={20} />, href: '#about' },
    { name: 'Projects', icon: <Briefcase size={20} />, href: '#projects' },
    { name: 'Skills', icon: <Zap size={20} />, href: '#skills' },
    { name: 'Contact', icon: <Mail size={20} />, href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <motion.nav 
      className="navbar-container"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className="navbar-pill">
        <motion.a 
          href="/" 
          className="nav-logo"
        >
          <span>Mohammed Yaser</span>
        </motion.a>

        {isMobile ? (
          <IconButton 
            onClick={handleDrawerToggle}
            sx={{ color: 'var(--text-h)', '&:hover': { background: 'rgba(170, 59, 255, 0.1)' } }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <div className="nav-links">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="nav-link"
                whileHover={{ 
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
                <span>{item.name}</span>
              </motion.a>
            ))}
          </div>
        )}
      </div>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: '250px',
            background: 'transparent',
            backgroundImage: 'none',
            boxShadow: 'none',
            border: 'none',
          },
        }}
      >
        <Box 
          sx={{ 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            pt: 2, /* Reduced padding as we now have an internal header */
            px: 2,
            background: 'rgba(255, 255, 255, 0.03)', 
            backdropFilter: 'blur(40px) saturate(200%)',
            WebkitBackdropFilter: 'blur(40px) saturate(200%)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          {/* Sidebar Header */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            mb: 4,
            px: 1
          }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Box
                sx={{
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: 'var(--accent)',
                  mb: 0.5,
                }}
              >
                Explore
              </Box>
              <Box
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--text-h)',
                  lineHeight: 1,
                }}
              >
                Menu
              </Box>
            </motion.div>

            <IconButton 
              onClick={handleDrawerToggle} 
              sx={{ color: 'var(--text-h)', mt: -0.5 }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Box 
            sx={{ 
              width: '40px', 
              height: '4px', 
              background: 'var(--accent)', 
              borderRadius: '2px',
              mb: 4,
              ml: 1
            }} 
          />

          <List sx={{ width: '100%' }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ListItem disablePadding>
                  <ListItemButton 
                    href={item.href} 
                    onClick={handleDrawerToggle}
                    sx={{ 
                      py: 1.5,
                      borderRadius: '12px',
                      color: 'var(--text-h)',
                      '&:hover': { background: 'rgba(170, 59, 255, 0.1)' }
                    }}
                  >
                    <ListItemIcon sx={{ color: 'var(--accent)', minWidth: '40px' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.name} 
                      primaryTypographyProps={{ 
                        style: {
                          fontSize: '1.2rem', 
                          fontWeight: 600,
                          fontFamily: 'inherit'
                        }
                      }} 
                    />
                  </ListItemButton>
                </ListItem>
              </motion.div>
            ))}
          </List>

          {/* Sidebar Footer */}
          <Box sx={{ mt: 'auto', pb: 4, px: 1 }}>
            <Box sx={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.4)', mb: 2 }}>
              Connect
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {[
                { icon: <GitHub sx={{ fontSize: 22 }} />, href: "https://github.com/mohammedyaserr" },
                { icon: <LinkedIn sx={{ fontSize: 22 }} />, href: "https://www.linkedin.com/in/mohammed-yaser-59a044333/" },
                { icon: <Email sx={{ fontSize: 22 }} />, href: "mailto:mohammedyaserdev@gmail.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  whileHover={{ scale: 1.2, color: 'var(--accent)' }}
                  style={{ color: 'var(--text-h)', textDecoration: 'none' }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </Box>
          </Box>
        </Box>
      </Drawer>
    </motion.nav>
  );
};

export default Navbar;
