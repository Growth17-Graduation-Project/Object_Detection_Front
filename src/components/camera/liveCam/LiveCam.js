//은서꺼

// import React, {useEffect, useState} from "react";
// import Webcam from "react-webcam";
// import ReactDOM from "react-dom"
// import {useHistory} from "react-router-dom";
// import axios from "axios";
// import Button from "../button";
// import "../button/button.scss";
// //import Button from '@material-ui/core/Button';
//
//
// export default function WebcamStreamCapture() {
//     const history = useHistory();
//
//     const [records, setRecords] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//
//     if (!sessionStorage.getItem("token")) {
//         alert("로그인이 필요한 서비스입니다.");
//         history.push('/');
//     }
//
//     const recordId = history.location.state.detail
//
//
//     useEffect(() => {
//         const fetchRecords = async () => {
//             try {
//                 // 요청이 시작 할 때에는 error 와 users 를 초기화하고
//                 setError(null);
//                 setRecords(null);
//                 setLoading(true);
//                 let token = sessionStorage.getItem('token');
//                 console.log(token);
//                 const response = axios.get(
//                     '/api/video_feed',
//                     {headers: {"Authorization": `Bearer ${token}`},
//                     responseType: 'stream',
//                     params: {'id': `${recordId}`,}
//                     },
//                 ).then(response => {
//                     console.log("hi");
//                     console.log(`success:${response.data}`)
//                     let imgTag = document.createElement('img')
//                     imgTag.src = URL.createObjectURL(response)
//                     imgTag.classList.add('video-modal', 'popup-video')
//                     imgTag.setAttribute("crossorigin", '')
//                     let streamDiv = document.getElementById('livestream-img')
//                     //streamDiv.appendChild(imgTag)
//                 }).catch( error => {
//                     console.log(`error:${response.data}`)
//                     let imgTag = document.createElement('img')
//                     let streamDiv = document.getElementById('livestream-img')
//                     // streamDiv.appendChild(imgTag)
//                 });
//                 setRecords(response); // 데이터는 response.data 안에 들어있습니다.
//             } catch (e) {
//                 setError(e);
//             }
//             setLoading(false);
//         };
//         fetchRecords();
//     }, []);
//
//     if (loading) return <div>로딩중..</div>;
//     if (error) return <div>에러가 발생했습니다</div>;
//     if (!records) return null;
//
//     return (
//         <div>
//             <img src="/api/video_feed" width='70%' />
//             {/*<Button*/}
//             {/*    onClick={() => {*/}
//             {/*        console.log("ajdjdj")*/}
//             {/*        console.log(recordId)*/}
//             {/*        history.push({*/}
//             {/*            pathname:'/EndCam',*/}
//             {/*            search: '?id='+`${recordId}`,*/}
//             {/*            state: {detail: recordId},*/}
//             {/*        })*/}
//             {/*    }*/}
//             {/*    }*/}
//             {/*>*/}
//             {/*</Button>*/}
//
//             <div className="Button" onClick={() => {
//                 console.log("ajdjdj")
//                 console.log(recordId)
//                 history.push({
//                     pathname:'/EndCam',
//                     search: '?id='+`${recordId}`,
//                     state: {detail: recordId},
//                 })
//             }
//             }>
//                 완료
//             </div>
//         </div>
//     );
// }
//
//
//


import React, {useEffect, useRef, useState, useCallback} from "react";
import Webcam from "react-webcam";
import styled from "styled-components";
//import config from "../config/config";
import {useHistory} from "react-router-dom";
import axios from "axios";


const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
`;

export default function Viewer() {
    const history = useHistory();

    // if (!sessionStorage.getItem("token")) {
    //     alert("로그인이 필요한 서비스입니다.");
    //     history.push('/');
    // }

    const recordId = history.location.state.detail

    const canvasRef = useRef(null);
    const webcamRef = useRef(null);
    const [capturedImg, setCapturedImg] = useState(null);
    const [returnImg, setReturnImg] = useState(null);
    const [prediction, setPrediction] = useState("");

    const [isPaused, setPause] = useState(false);
    const ws = useRef(null);

    // useEffect(() => {
    //     const client_id = Date.now();
    //     const url = `${config.WS_SERVER}/${client_id}`;
    //     console.log(url);
    //     ws.current = new WebSocket(url);
    //     ws.current.onopen = () => console.log("ws opened");
    //     ws.current.onclose = () => console.log("ws closed");
    //
    //     return () => {
    //         ws.current.close();
    //     };
    // }, []);

    // useEffect(() => {
    //     if (!ws.current) return;
    //
    //     ws.current.onmessage = (event) => {
    //         if (isPaused) return;
    //         const message = JSON.parse(event.data);
    //         // console.log(message);
    //         setCapturedImg(message.output);
    //         setPrediction(message.prediction);
    //     };
    // }, [isPaused]);

    // function sendMessage(msg) {
    //     if (!ws.current) return;
    //
    //     ws.current.send(msg);
    // }

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user", // Can be "environment" or "user"
    };

    // const capture = useCallback(() => {
    //     const capturedImg = webcamRef.current.getScreenshot();
    //     setCapturedImg(capturedImg);
    //     //console.log(capturedImg);
    //     //sendMessage(capturedImg);
    // }, [webcamRef]);

    const capture = ()=> {
        const capturedImg = webcamRef.current.getScreenshot();
        setCapturedImg(capturedImg);
        //console.log(capturedImg);
        //sendMessage(capturedImg);
    };

    // const response =  axios.get(
    //     '/api/home/record',
    //     {headers: {"Authorization": `Bearer ${token}`},
    //         body: JSON.stringify({
    //             userId: userId,
    //         })
    //     }
    // );

    //setInterval(capture, 3000)
    let token = sessionStorage.getItem('token');

    const sendImage = () => {
        const capturedImg = webcamRef.current.getScreenshot();
        console.log("before post")

        const response = axios.post(
            `/api/video_feed/${recordId}`,
            {
                headers: {"Authorization": `Bearer ${token}`, "Content-Type": "multipart/form-data"},
                "imageBase64": capturedImg
            }
        ).then(response => {
            console.log("after post");
            console.log(response);
            console.log(`success:${response.data}`)
            const returnImg = response.data
        }).catch(error => {
            console.log(`error:${response.data}`)
        });
        console.log(returnImg)
        return returnImg;
    }

    setInterval(sendImage, 500)
    const MyComponent = props => {
        const webcamRef = useRef(null);
        const canvasRef = useRef(null);

        function drawImge() {
            const video = webcamRef.current;
            const canvas = canvasRef.current;
            if (video && canvas) {
                var ctx = canvas.getContext('2d');
                canvas.width = video.video.videoWidth;
                canvas.height = video.video.videoHeight;
                // We want also the canvas to display de image mirrored
                ctx.translate(canvas.width, 0);
                ctx.scale(-1, 1);
                ctx.drawImage(video.video, 0, 0, canvas.width, canvas.height);
                ctx.scale(-1, 1);
                ctx.translate(-canvas.width, 0);
                var faceArea = 300;
                var pX = canvas.width / 2 - faceArea / 2;
                var pY = canvas.height / 2 - faceArea / 2;
                ctx.rect(pX, pY, faceArea, faceArea);
                ctx.lineWidth = "6";
                ctx.strokeStyle = "red";
                ctx.stroke();
                setTimeout(drawImge, 33);
            }
        }
        setTimeout(drawImge, 33);
    }
    return (
        <Wrapper>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width="50%"
                videoConstraints={videoConstraints}
            />
            <canvas ref={canvasRef} />
            <p>
                {/*<button onClick={capture}>Capture photo</button>*/}
            </p>
            {capturedImg && <img src={capturedImg} width="50%"/>}

            {/*<script>setInterval(sendImage, 5000)</script>*/}
            {returnImg && <img src={returnImg} width="50%"/>}

            <p>
                <h3>{prediction && prediction}</h3>
            </p>

            <div className="Button" onClick={() => {
                console.log("ajdjdj")
                console.log(recordId)
                history.push({
                    pathname:'/Object_Detection_Front/EndCam',
                    search: '?id='+`${recordId}`,
                    state: {detail: recordId},
                })
            }
            }>
                완료
            </div>

        </Wrapper>
    );
}
