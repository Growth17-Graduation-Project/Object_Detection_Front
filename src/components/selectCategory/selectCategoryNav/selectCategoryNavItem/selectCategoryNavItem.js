/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* Router */
import { NavLink } from 'react-router-dom';

/* Styled */
import styled from 'styled-components';

/* Styled Components */
const Circle= styled.div`
  float: left;
  font-size: 20px;
  font-weight: bold;
  width: 15rem;
  height: 15rem;
  background: #F3F3F4;
  border-radius: 30%;
  margin: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  
  &:hover {
    background-color: #E1E3EA;
    box-shadow: 3px 3px 3px 3px darkgrey;
    color: black;
    cursor: pointer;
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
        <Circle className={ className }>
            {/*<NavLink to={ href }>*/}
            {/*    { label }*/}
            {/*</NavLink>*/}
        </Circle>
    );
}

/* Main Component Settings */
selectCategoryNavItem.propTypes = {
    label: PropTypes.string,
    href: PropTypes.string,
}

/* Exports */
export default selectCategoryNavItem;