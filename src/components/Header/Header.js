import {
  AppBar,
  Drawer,
  IconButton,
  makeStyles,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const headersOptions = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Find Your Region",
    href: "#", //the href of the interactive map
  },
  {
    label: "Contact NSYEP Sites",
    href: "/contact",
  },
];

const Header = () => {
  const [mobileView, setMobileView] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // const [state, setState] = useState({mobileView: false});
  // const {mobileView} = state;

  useEffect(() => {
    const setResponsiveness = () => {
      console.log("this is the inner width,", window.innerWidth, "also this is what mobileView is set to", mobileView)
      return window.innerWidth < 900
        ? setMobileView(true)
        : setMobileView(false);
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "var(--banner-color-accent)",
      paddingRight: "40px",
      paddingLeft: "40px", //probably change this
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },
      drawerContainer: {
        padding: "1rem",
      },
      toolbar: {
        display: "flex",
        justifyContent: "spave-between",
      },
    },
  }));

  const classes = useStyles();

  const getDrawerChoices = () => {
    return headersOptions.map(({ label, href }) => {
      return (
        <Link
          {...{
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };


  const displayMobile = () => {
    const handleMenuOpen = () => {
      setMenuOpen(!menuOpen);
    };
    return (
      <Toolbar >
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleMenuOpen,
          }}
        >
           Menu Icon
        </IconButton>
        <Drawer
          {...{ anchor: "left", open: menuOpen, onClose: handleMenuOpen }}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <div> A Logo </div>
      </Toolbar>
    );
  };

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <Navbar />
      </Toolbar>
    )
  }

  return (
    <div>
      <header>
        <AppBar className={classes.header} position="relative">
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
    </div>
  );
};

export default Header;
