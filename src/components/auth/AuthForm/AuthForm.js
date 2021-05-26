import {useHistory} from "react-router-dom";
import {Router} from "@material-ui/icons";


export default function CheckLogin() {
    const history = useHistory();

    if (!sessionStorage.getItem("token")) {
        alert("로그인이 필요한 서비스입니다.");
        history.push('/Object_Detection_Front/');
    }

    return ('/Object_Detection_Front/');

}