/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* Styled */
import styled from 'styled-components';

/* Sub Components */
import SelectCategoryNav from './selectCategoryNav';

/* Styled Components */
const Container = styled.circle`
  position: fixed;
  margin-left:240px;
  left: 0;
  height: 100%;
  width: 100%
`;

/* Constant Variables */
const items = [
    { label: "dd", href: "/home" },
    { label: "시작하기", href: "/selectCategory" },
    { label: "상품", href: "/product" },
    { label: "dd", href: "/home" },
    { label: "시작하기", href: "/selectCategory" },
    { label: "상품", href: "/product" },
    { label: "dd", href: "/home" },
    { label: "시작하기", href: "/selectCategory" },
    { label: "상품", href: "/product" },
    { label: "dd", href: "/home" },
    { label: "시작하기", href: "/selectCategory" },
    { label: "상품", href: "/product" },
    { label: "dd", href: "/home" },
    { label: "시작하기", href: "/selectCategory" },
    { label: "상품", href: "/product" },
    { label: "dd", href: "/home" },
    { label: "시작하기", href: "/selectCategory" },
    { label: "상품", href: "/product" }

];

/* Main Compoent */
const SelectCategory = props => {
    /* Props */
    const {
        className,
    } = props;

    /* Renderer */
    return (
        <Container className={ className }>
            <SelectCategoryNav items={ items } />
        </Container>
    );
}

/* Main Component Settings */
SelectCategory.propTypes = {
    className: PropTypes.string,
}

/* Exports */
export default SelectCategory;