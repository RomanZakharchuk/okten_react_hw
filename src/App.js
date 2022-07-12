import {Component} from "react";
import {Routes, Route} from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path={'users'} element={<Users/>}/>
                        <Route path={'posts'} element={<Posts/>}/>
                        <Route path={'comments'} element={<Comments/>}/>
                    </Route>
                </Routes>

            </div>
        );
    }
}

export default App;
