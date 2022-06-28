import './App.css';
import Users from "./components/users";
import Comments from "./components/comments/Comments";
import {getPostComments} from "./services";
import {useState} from "react";

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
