import React, {useEffect, useState} from "react";
import Webcam from "react-webcam";
import ReactDOM from "react-dom"
import {useHistory} from "react-router-dom";
import axios from "axios";
import Button from "../button";
import "../button/button.scss";
//import Button from '@material-ui/core/Button';


export default function WebcamStreamCapture() {
    const history = useHistory();

    const [records, setRecords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    if (!sessionStorage.getItem("token")) {
        alert("로그인이 필요한 서비스입니다.");
        history.push('/');
    }

    const recordId = history.location.state.detail


    useEffect(() => {
        const fetchRecords = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setRecords(null);
                setLoading(true);
                let token = sessionStorage.getItem('token');
                console.log(token);
                const response = axios.get(
                    'http://localhost:8000/api/video_feed',
                    {headers: {"Authorization": `Bearer ${token}`},
                    responseType: 'stream',
                    params: {'id': `${recordId}`,}
                    },
                ).then(response => {
                    console.log("hi");
                    console.log(`success:${response.data}`)
                    let imgTag = document.createElement('img')
                    imgTag.src = URL.createObjectURL(response)
                    imgTag.classList.add('video-modal', 'popup-video')
                    imgTag.setAttribute("crossorigin", '')
                    let streamDiv = document.getElementById('livestream-img')
                    //streamDiv.appendChild(imgTag)
                }).catch( error => {
                    console.log(`error:${response.data}`)
                    let imgTag = document.createElement('img')
                    let streamDiv = document.getElementById('livestream-img')
                    // streamDiv.appendChild(imgTag)
                });
                setRecords(response); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchRecords();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!records) return null;

    return (
        <div>
            <img src="http://localhost:8000/api/video_feed" width='70%' />
            {/*<Button*/}
            {/*    onClick={() => {*/}
            {/*        console.log("ajdjdj")*/}
            {/*        console.log(recordId)*/}
            {/*        history.push({*/}
            {/*            pathname:'/EndCam',*/}
            {/*            search: '?id='+`${recordId}`,*/}
            {/*            state: {detail: recordId},*/}
            {/*        })*/}
            {/*    }*/}
            {/*    }*/}
            {/*>*/}
            {/*</Button>*/}

            <div className="Button" onClick={() => {
                console.log("ajdjdj")
                console.log(recordId)
                history.push({
                    pathname:'/EndCam',
                    search: '?id='+`${recordId}`,
                    state: {detail: recordId},
                })
            }
            }>
                완료
            </div>
        </div>
    );
}



