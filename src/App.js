import {useState} from "react";

import './App.css';
import {getPostComments} from "./services";
import Users from "./components/users";
import Comments from "./components/comments/Comments";

const App = () =>{

    const [posts, setPosts] = useState([]);

    const showPosts = (id) => {
        getPostComments(id).then(({data}) => setPosts([...data]));
    }

    return (
        <div className="App">
            <Users showPosts={showPosts}/>
            <Comments posts={posts}/>
        </div>
    );
}

export default App;
