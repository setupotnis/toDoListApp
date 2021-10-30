import { NextComponentType } from "next";
import React from "react";
import "@fontsource/roboto/300.css";
import { Typography } from "@mui/material";
import styles from "../styles/Header.module.css";

/*
 * This functional component returns a header for the main page
 */

const Header: NextComponentType = () => {
  return (
    <div className={styles.Banner}>
      <Typography variant="h2" component="h2" align="center">
        To Do List
      </Typography>
    </div>
  );
};

export default Header;
