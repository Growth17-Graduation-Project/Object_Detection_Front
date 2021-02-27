import React from "react";
import styles from "./MainStructure.scss";
import classNames from "classnames/bind";
import Header from "./Header";
import SideBar from "./SideBar";

// eslint-disable-next-line
const cx = classNames.bind(styles);

const MainStructure = ({ children }) => (
    <div>
        <Header />
        <SideBar />
        <main>{children}</main>
    </div>
);

export default MainStructure;