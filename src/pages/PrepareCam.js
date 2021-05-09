import MainStructure from "../components/structure";
import Auth from "../components/auth/AuthForm/AuthForm";
import Cam from "../components/camera/prepareCam";
import React from "react";

const PrepareCam = () => {
    return <MainStructure>
        <Auth />
        <Cam />
    </MainStructure>;
};

export default PrepareCam;