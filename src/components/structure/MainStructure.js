import React from "react";
import styles from "./MainStructure.scss";
import classNames from "classnames/bind";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";

const Content = styled.div`
  margin-left: 240px;
  padding-top: 5rem;
  left: 0;
  width: -240px;
`;


// eslint-disable-next-line
const cx = classNames.bind(styles);

const MainStructure = ({ children }) => (
    <div>
        <Header />
        <SideBar />
        <Content>{children}</Content>
    </div>
);

export default MainStructure;