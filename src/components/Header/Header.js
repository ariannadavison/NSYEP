import {
  AppBar,
  Drawer,
  IconButton,
  makeStyles,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import MottoBanner from "../MottoBanner/MottoBanner"

import { whileStatement } from "@babel/types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars, faAngleLeft, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const headersOptions = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Find Your Region",
    href: "/regionalmap", //the href of the interactive map
  },
  {
    label: "About NYATEP",
    href: "/about-us",
  },
];

const Header = () => {
  const [mobileView, setMobileView] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // const [state, setState] = useState({mobileView: false});
  // const {mobileView} = state;

  useEffect(() => {
    const setResponsiveness = () => {
      console.log(
        "this is the inner width,",
        window.innerWidth,
        "also this is what mobileView is set to",
        mobileView
      );
      return window.innerWidth < 900
        ? setMobileView(true)
        : setMobileView(false);
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, [mobileView]);

  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "var(--text-color-deco)",
      paddingRight: "40px",
      // paddingLeft: "40px", //probably change this
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },
      boxShadow: "none",
    },
    drawerContainer: {
      padding: "1rem",
      // backgroundColor: "var(--logo-navy)",
      height: "100%",
      textDecoration: "none",
      backgroundColor: "var(--text-color-deco)",
      height: "100%",
      color: "white",

    },

    toolbar: {
      display: "flex",

      justifyContent: "space-between",
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
            style: { textDecoration: "none", color: "white", },
            key: label,
            onClick: () => setMenuOpen(!menuOpen),
          }}
        >
          <MenuItem
            {...{ style: { borderBottom: "white solid .5pt", width: "100%", margin: "10px", marginLeft: "0px" } }}>{label}</MenuItem>
        </Link >

      );
    });
  };

  const displayMobile = () => {
    const handleMenuOpen = () => {
      setMenuOpen(!menuOpen);
    };


    return (
      <Toolbar>

        <Drawer
          {...{ anchor: "left", open: menuOpen, onClose: handleMenuOpen, }}
        >
          <div className={classes.drawerContainer}>
            <IconButton
              {...{

                color: "inherit",
                style: { color: "white", display: "flex", justifyContent: "flex-end", width: "100%", },
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleMenuOpen,
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} size="lg" />


            </IconButton>
            {getDrawerChoices()}
          </div>
        </Drawer>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",

            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleMenuOpen,
          }}
        >
          {/* <MenuIcon /> */}
          <FontAwesomeIcon icon={faBars} size="lg" />
        </IconButton>
        {/* <div> A Logo </div> */}
        {/* 
        <Drawer
          {...{ anchor: "left", open: menuOpen, onClose: handleMenuOpen }}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer> */}
      </Toolbar>
    );
  };

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <Navbar />
      </Toolbar>
    );
  };

  return (
    <div>
      <MottoBanner />
      <header>
        <AppBar className={classes.header} position="relative">
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
    </div>
  );
};

export default Header;
