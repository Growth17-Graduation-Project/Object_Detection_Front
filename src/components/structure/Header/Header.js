import React from "react";
import styles from "./Header.scss";
import classNames from "classnames/bind";
import {Link, useHistory} from "react-router-dom";
import {MdLockOpen} from "react-icons/md";


const cx = classNames.bind(styles);

export default function Header() {

    const history = useHistory();

    const OnLogout = async () => {
        sessionStorage.removeItem("token");
        alert("로그아웃이 완료되었습니다.");
        history.push('/')
    }
    return (
        <div className={cx("header")}>
            <Link to={"/home"} className={cx("logo")}>
                시스템 제목
            </Link>
            <div className={cx("logout")}>
                <MdLockOpen onClick={OnLogout}/>
                <div className={cx("logoutText")}>로그아웃</div>
            </div>
        </div>
    )
}
