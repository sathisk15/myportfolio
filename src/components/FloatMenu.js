import React, { useState } from 'react';
// React Scroll NPM Package
import { Link as LinkS } from 'react-scroll';
import { IconButton } from '@material-ui/core';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Sidebar from './Sidebar/Sidebar';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  deskTopFloatMenu: {
    position: 'fixed',
    right: '0',
    margin: '40px 80px 0 0',
    top: '0',
    zIndex: '9',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  floatMobileMenu: {
    position: 'fixed',
    right: '0',
    margin: '0 20px 20px 0',
    bottom: '0',
    zIndex: '9',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));
const FloatMenu = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);
  const handleDropdown = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const handleMenuItemClick = (event) => {
    setOpen(false);
  };

  return (
    <div className="floatMenu">
      <div className={classes.deskTopFloatMenu}>
        {/* <IconButton ref={anchorRef} onClick={handleDropdown}>
          <Avatar alt="Sathis" src={AvaImg} />
        </IconButton> */}
        <IconButton
          ref={anchorRef}
          onClick={handleDropdown}
          style={{
            backgroundColor: '#0a66c2',
            color: '#FFF',
          }}
        >
          <MenuIcon />
        </IconButton>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          transition
          placement="bottom-center"
          style={{ margin: '5px 0' }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList>
                    {[
                      'Home',
                      'About',
                      'Skills',
                      'Certification',
                      'Projects',
                      'Experience',
                      'Education',
                      'Contact',
                    ].map((option) => (
                      <LinkS
                        to={option}
                        spy={true}
                        smooth={true}
                        duration={500}
                        style={{ textDecoration: 'none' }}
                      >
                        <MenuItem
                          key={option}
                          onClick={(event) => handleMenuItemClick(event)}
                        >
                          {option}
                        </MenuItem>
                      </LinkS>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
      <div className={classes.floatMobileMenu}>
        <IconButton
          style={{
            background:
              'linear-gradient(90deg, rgba(255,102,179,1) 0%, rgba(194,148,233,1) 100%)',
            padding: '0',
          }}
        >
          <Sidebar />
        </IconButton>
      </div>
    </div>
  );
};

export default FloatMenu;
