/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* Styled */
import styled from 'styled-components';

/* Sub Components */
import Detail from './detail';
import { makeStyles } from "@material-ui/core/styles";

// /* Styled Components */
// const List = styled.ul`
//   margin: 0;
//   padding: 1rem;
//   align-items: center;
// `;
//
// /* Main Compoent */
// const detailCardContainer = props => {
//     /* Props */
//     // const {
//     //     className,
//     //     items,
//     // } = props;

const useStyles = makeStyles({
    container: {
        boxShadow: '0px 0px solid white',
        padding: 50,
    },
});

export default function DetailCardContainer() {
    const classes = useStyles();
    /* Renderer */
    return (
        // <List className={ className }>
        //     {
        //         items && items.map((opt, idx)=>(
        //             <Detail key={ idx } { ...opt }/>
        //         ))
        //     }
        // </List>
        <div className={ classes.container }>
            <Detail />
            <Detail />
            <Detail />
            <Detail />
            <Detail />
            <Detail />
            <Detail />
            <Detail />
            <Detail />
            <Detail />
        </div>
    );
}

/* Main Component Settings */
// detailCardContainer().propTypes = {
//     className: PropTypes.string,
//     items: PropTypes.array,
// }

/* Exports */
//export default detailCardContainer;