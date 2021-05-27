//은서꺼
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


    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user", // Can be "environment" or "user"
    };


    const capture = () => {
        const capturedImg = webcamRef.current.getScreenshot();
        setCapturedImg(capturedImg);
        //console.log(capturedImg);
        //sendMessage(capturedImg);
    };

    let token = sessionStorage.getItem('token');

    const sendImage = () => {
        console.log("Start!")

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
            console.log(response.data['leftTopX'])
            if (response.data['success'] === 1) {
                const leftTopX = response.data['leftTopX'];
                const leftTopY = response.data['leftTopY'];
                const width = response.data['rightBottomX'] - response.data['leftTopX'];
                const height = response.data['rightBottomY'] - response.data['leftTopY'];
            }

        }).catch(error => {
            console.log(`error:${response.data}`)
        });
    }

    function drawImge() {
        const video = webcamRef.current;
        const canvas = canvasRef.current;

        console.log("Start!")
        if (video && canvas) {
            const capturedImg = video.getScreenshot();
            console.log("before post")

            const response = axios.post(
                `/api/video_feed/${recordId}`,
                {
                    headers: {"Authorization": `Bearer ${token}`, "Content-Type": "multipart/form-data"},
                    "imageBase64": capturedImg
                }
            ).then(response => {
                console.log("after post");
                console.log(response.data['leftTopX'])

                const leftTopX = response.data['leftTopX'] * video.video.videoWidth;
                const leftTopY = response.data['leftTopY'] * video.video.videoHeight;
                const height = (response.data['rightBottomX'] - response.data['leftTopX']) * video.video.videoHeight;
                const width = (response.data['rightBottomY'] - response.data['leftTopY']) * video.video.videoWidth;

                console.log(video.video.videoWidth)

                console.log(leftTopX)

                // if(response.data['success']===0) return;

                var ctx = canvas.getContext('2d');
                canvas.width = video.video.videoWidth;
                canvas.height = video.video.videoHeight;

                console.log(canvas.width)
                console.log(canvas.height)



                // We want also the canvas to display de image mirrored
                //ctx.translate(canvas.width, 0);
                //ctx.scale(-1, 1);
                ctx.drawImage(video.video, 0, 0, canvas.width, canvas.height);
                //ctx.scale(-1, 1);
                //ctx.translate(-canvas.width, 0);
                // var faceArea = 300;
                // var pX = canvas.width / 2 - faceArea / 2;
                // var pY = canvas.height / 2 - faceArea / 2;
                ctx.rect(leftTopX, leftTopY, width, height);

                console.log("hihi")

                ctx.lineWidth = "6";
                ctx.strokeStyle = "red";
                ctx.stroke();


            }).catch(error => {
                console.log(`error:${response.data}`)
            });
        }
    }

    //setTimeout(drawImge, 100);

    let timer = setInterval(drawImge, 1000)

    //setInterval(sendImage, 1000)

    return (
        <Wrapper>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width="50%"
                videoConstraints={videoConstraints}
            />
            <canvas ref={canvasRef} width="50%"/>
            <p>
                {/*<button onClick={capture}>Capture photo</button>*/}
            </p>


            <div className="Button" onClick={() => {
                console.log("ajdjdj")
                console.log(recordId)
                clearInterval(timer)
                history.push({
                    pathname: '/EndCam',
                    search: '?id=' + `${recordId}`,
                    state: {detail: recordId},
                })
            }
            }>
                완료
            </div>

        </Wrapper>
    );
}
