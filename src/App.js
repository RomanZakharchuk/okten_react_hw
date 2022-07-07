import {Link, Routes, Route} from "react-router-dom";

import './App.css';
import Home from "./pages/home";
import Todos from "./pages/todos";
import Albums from "./pages/albums";
import Comments from "./pages/comments";
import PostsComponent from "./componets/postsComponent";

const App = () => {
    return (
        <div className="App">
            <div className='header'>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/todos'}>Todos</Link></li>
                        <li><Link to={'/albums'}>Albums</Link></li>
                        <li><Link to={'/comments'}>Comments</Link></li>
                    </ul>
                </nav>
            </div>

            <Routes>
                <Route index element={<Home/>}/>
                <Route path={'todos'} element={<Todos/>}/>
                <Route path={'albums'} element={<Albums/>}/>
                <Route path={'comments'} element={<Comments/>}>
                    <Route path={':id'} element={<PostsComponent/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
