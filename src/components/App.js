import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {
    Main,
    Auth,
    NotFound,
    SelectCategory,
    Home,
    Memo,
    Past,
    LiveCam,
    PastDetail,
    SignUp,
    PrepareCam,
    EndCam
} from "../pages";
import '../styles/index.scss'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    backgroundColor: '#0B0B3B',

    palette: {
        primary: {
            main: '#0B0B3B'
        },
        secondary: {
            main: '#E33E7F'
        },
        typography: {
            fontFamily: "Do hyeon",
        }
    }
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <Switch>
                        <Route path="/Object_Detection_Front/" exact={true} component={Home} />
                        <Route path="/Object_Detection_Front/home" exact={true} component={Main} />
                        <Route path="/Object_Detection_Front/auth/:kind" exact={true} component={Auth} />
                        <Route path="/Object_Detection_Front/selectCategory" exact={true} component={SelectCategory} />
                        <Route path="/Object_Detection_Front/memo" exact={true} component={Memo} />
                        <Route path="/Object_Detection_Front/past" exact={true} component={Past} />
                        <Route path="/Object_Detection_Front/liveCam" exact = {true} component={LiveCam} />
                        <Route path="/Object_Detection_Front/startCam" exact = {true} component={PrepareCam} />
                        <Route path="/Object_Detection_Front/endCam" exact = {true} component={EndCam} />
                        <Route path="/Object_Detection_Front/signUp" exact = {true} component={SignUp} />
                        <Route path="/Object_Detection_Front/past/detail/:id" exact={true} component={PastDetail} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </MuiThemeProvider>

        );
    }
}
export default App;


    // state = {
    //     posts: []
    // };

//     async componentDidMount() {
//         try {
//             const res = await fetch('http://127.0.0.1:8000/api/');
//             const posts = await res.json();
//             this.setState({
//                 posts
//             });
//         } catch (e) {
//             console.log(e);
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 {this.state.posts.map(item => (
//                     <div key={item.id}>
//                         <h1>{item.title}</h1>
//                         <span>{item.content}</span>
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }



