import React from "react";
import MainStructure from "../components/structure/MainStructure";
import SideBar from "../components/structure/SideBar";
import NoteContainer from "../containers/NoteContainer";

const Main = () => {
    return <MainStructure>
        <SideBar />
        <NoteContainer />
    </MainStructure>;
};

export default Main;

