/* src/layouts/Main/SideBar/SideBar.js */
/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* Styled */
import styled from 'styled-components';

/* Sub Components */
import SideBarNav from './SideBarNav';

/* Styled Components */
const Container = styled.div`
  position: fixed;
  margin-top: 5rem;
  left: 0;
  height: 100%;
  width: 240px;
  background-color: darkgrey;
`;

/* Constant Variables */
const items = [
    { label: "홈", href: "/home" },
    { label: "시작하기", href: "/selectCategory" },
    { label: "상품", href: "/product" }
];

/* Main Compoent */
const SideBar = props => {
    /* Props */
    const {
        className,
    } = props;

    /* Renderer */
    return (
        <Container className={ className }>
            <SideBarNav items={ items } />
        </Container>
    );
}

/* Main Component Settings */
SideBar.propTypes = {
    className: PropTypes.string,
}

/* Exports */
export default SideBar;