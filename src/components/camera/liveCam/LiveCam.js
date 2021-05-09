import React, {useEffect, useState} from "react";
import Webcam from "react-webcam";
import ReactDOM from "react-dom"
import {useHistory} from "react-router-dom";
import axios from "axios";

// const WebcamStreamCapture = () => {
//     const webcamRef = React.useRef(null);
//     const mediaRecorderRef = React.useRef(null);
//     const [capturing, setCapturing] = React.useState(false);
//     const [recordedChunks, setRecordedChunks] = React.useState([]);
//
//
//     const handleStartCaptureClick = React.useCallback(() => {
//         setCapturing(true);
//         mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
//             mimeType: "video/webm"
//         });
//         mediaRecorderRef.current.addEventListener(
//             "dataavailable",
//             handleDataAvailable
//         );
//         mediaRecorderRef.current.start();
//     }, [webcamRef, setCapturing, mediaRecorderRef]);
//
//     const handleDataAvailable = React.useCallback(
//         ({ data }) => {
//             if (data.size > 0) {
//                 setRecordedChunks((prev) => prev.concat(data));
//             }
//         },
//         [setRecordedChunks]
//     );
//
//     const handleStopCaptureClick = React.useCallback(() => {
//         mediaRecorderRef.current.stop();
//         setCapturing(false);
//     }, [mediaRecorderRef, webcamRef, setCapturing]);
//
//     const handleDownload = React.useCallback(() => {
//         if (recordedChunks.length) {
//             const blob = new Blob(recordedChunks, {
//                 type: "video/webm"
//             });
//             const url = URL.createObjectURL(blob);
//             const a = document.createElement("a");
//             document.body.appendChild(a);
//             a.style = "display: none";
//             a.href = url;
//             a.download = "react-webcam-stream-capture.webm";
//             a.click();
//             window.URL.revokeObjectURL(url);
//             setRecordedChunks([]);
//         }
//     }, [recordedChunks]);
//
//     return (
//         <>
//             <Webcam audio={false} ref={webcamRef} />
//             {capturing ? (
//                 <button onClick={handleStopCaptureClick}>Stop Capture</button>
//             ) : (
//                 <button onClick={handleStartCaptureClick}>Start Capture</button>
//             )}
//             {recordedChunks.length > 0 && (
//                 <button onClick={handleDownload}>Download</button>
//             )}
//         </>
//     );
// };
//
// ReactDOM.render(<WebcamStreamCapture />, document.getElementById("root"));
//
//
// export default WebcamStreamCapture;


export default function WebcamStreamCapture() {
    const history = useHistory();

    const [records, setRecords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    if (!sessionStorage.getItem("token")) {
        alert("로그인이 필요한 서비스입니다.");
        history.push('/');
    }

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
                    responseType: 'stream'}
                ).then(response => {
                    console.log("hi");
                    console.log(`success:${response.data}`)
                    let imgTag = document.createElement('img')
                    imgTag.src = URL.createObjectURL(response)
                    imgTag.classList.add('video-modal', 'popup-video')
                    imgTag.setAttribute("crossorigin", '')
                    let streamDiv = document.getElementById('livestream-img')
                    streamDiv.appendChild(imgTag)
                }).catch( error => {
                    console.log(`error:${response.data}`)
                    let imgTag = document.createElement('img')
                    let streamDiv = document.getElementById('livestream-img')
                    streamDiv.appendChild(imgTag)
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
        <img src="http://localhost:8000/api/video_feed" />
    );
}


