import React from "react";
import MainStructure from "../components/structure/MainStructure";
import LiveCamera from "../components/camera/liveCam"
import Auth from "../components/auth/AuthForm"

const LiveCam = () => {
    return <MainStructure>
        <Auth />
        <LiveCamera> </LiveCamera>
    </MainStructure>;
};

export default LiveCam;