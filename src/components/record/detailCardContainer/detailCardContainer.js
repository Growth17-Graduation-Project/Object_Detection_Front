/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* Styled */
import styled from 'styled-components';

/* Sub Components */
import Detail from './detail';

/* Styled Components */
const List = styled.ul`
  margin: 0;
  padding: 1rem;
`;

/* Main Compoent */
const detailCardContainer = props => {
    /* Props */
    // const {
    //     className,
    //     items,
    // } = props;




    /* Renderer */
    return (
        // <List className={ className }>
        //     {
        //         items && items.map((opt, idx)=>(
        //             <Detail key={ idx } { ...opt }/>
        //         ))
        //     }
        // </List>
        <List>
            <Detail />
            <Detail />
            <Detail />
            <Detail />
            <Detail />
            <Detail />
            <Detail />
            <Detail />
            <Detail />
        </List>
    );
}

/* Main Component Settings */
// detailCardContainer().propTypes = {
//     className: PropTypes.string,
//     items: PropTypes.array,
// }

/* Exports */
export default detailCardContainer;