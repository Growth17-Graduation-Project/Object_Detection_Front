/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* Router */
import { NavLink } from 'react-router-dom';

/* Styled */
import styled from 'styled-components';

/* Styled Components */
const TopItem = styled.div`
  float: left;
  font-size: 20px;
  font-weight: bold;
  width: 10rem;
  height: 3rem;

  &:hover {
    background-color: #FAFAFA;
    box-shadow: 3px 3px 3px 3px darkgrey;
    color: black;
  };

`;

/* Main Component */
const selectCategoryNavItem = props => {
    /* Props */
    const {
        className,
        label,
        href,
    } = props;

    /* Renderer */
    return (
        <TopItem className={ className }>
            {/*<NavLink to={ href }>*/}
            {/*    { label }*/}
            {/*</NavLink>*/}
        </TopItem>
    );
}

/* Main Component Settings */
selectCategoryNavItem.propTypes = {
    label: PropTypes.string,
    href: PropTypes.string,
}

/* Exports */
export default selectCategoryNavItem;