/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* Styled */
import styled from 'styled-components';

/* Sub Components */
import BigCategoryNavItem from './bigCategoryNavItem';

/* Styled Components */
const List = styled.ul`
  background-color: lightgrey;
  margin: 1rem;
  padding: 0;
  width: -240px;
  box-shadow: 1px 1px 1px dimgrey;
`;

/* Main Compoent */
const bigCategoryNav = props => {
    /* Props */
    const {
        className,
        items,
    } = props;

    /* Renderer */
    return (
        <List className={ className }>
            {
                items && items.map((opt, idx)=>(
                    <BigCategoryNavItem key={ idx } { ...opt }/>
                ))
            }
        </List>
    );
}

/* Main Component Settings */
bigCategoryNav.propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
}

/* Exports */
export default bigCategoryNav;