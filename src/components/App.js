import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Main, Auth, NotFound, SelectCategory, Home, Memo, Past } from "../pages";

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/home" exact={true} component={Main} />
                    <Route path="/auth/:kind" exact={true} component={Auth} />
                    <Route path="/selectCategory" exact={true} component={SelectCategory} />
                    <Route path="/memo" exact={true} component={Memo} />
                    <Route path="/past" exact={true} component={Past} />
                    <Route component={NotFound} />
                </Switch>
            </div>
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



