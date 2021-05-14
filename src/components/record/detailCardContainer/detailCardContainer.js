/* React */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

/* Styled */
import styled from 'styled-components';

/* Sub Components */
import Detail from './detail';
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import {NavLink, useHistory, useParams} from "react-router-dom";
import {List} from "@material-ui/core";
import moment from "moment";

// /* Styled Components */
// const List = styled.ul`
//   margin: 0;
//   padding: 1rem;
//   align-items: center;
// `;
//


// /* Main Component Settings */
// // detailCardContainer().propTypes = {
// //     className: PropTypes.string,
// //     items: PropTypes.array,
// // }
//
// /* Exports */
// export default detailCardContainer;

// /* Main Compoent */
// const detailCardContainer = props => {
//     /* Props */
//     const {
//         className,
//         items,
//     } = props;



const useStyles = makeStyles( {
    container: {
        boxShadow: '0px 0px solid white',
        padding: 50,
    },
});

export default function DetailCardContainer() {
    const classes = useStyles();
    const history = useHistory();

    const { id } = useParams()

    const [detailRecords, setDetailRecords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    if (!sessionStorage.getItem("token")) {
        alert("로그인이 필요한 서비스입니다.");
        history.push('/');
    }


    useEffect(() => {
        const fetchDetailRecords = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setDetailRecords(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await axios.get(
                    `http://localhost:8000/api/home/record/detail/${id}`
                );
                setDetailRecords(response.data.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchDetailRecords();
    }, []);

    const detailRecord = detailRecords.map((row) => {
        row.captureTime = moment(row.captureTime).format("YYYY년 MM월 DD일 HH시 mm분 ss초")
        return row
    })

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!detailRecords) return null;

    return (
        <List/* className={ className }*/>
            {detailRecord.map((row) => (
                <Detail
                    detectedItem={row.detectedItem}
                    image = {row.image}
                    captureTime = {row.captureTime}
                />
            ))}
        </List>
    );
}

