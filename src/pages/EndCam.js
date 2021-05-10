import MainStructure from "../components/structure";
import Auth from "../components/auth/AuthForm/AuthForm";
import Cam from "../components/camera/endCam";
import React from "react";

const EndCam = () => {
    return <MainStructure>
        <Auth />
        <Cam />
    </MainStructure>;
};

export default EndCam;