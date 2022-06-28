import {useEffect, useState} from "react";

import './App.css';
import {getPostComments, getUsers} from "./services";
import Users from "./components/users";
import Comments from "./components/comments";

function App() {

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]));
    }, []);

    const showPosts = (id) => {
        getPostComments(id).then(({data}) => setPosts([...data]));
    };

    return (
        <div className="App">
            <div className='users_wrap'>
                {
                    users.map(value => <Users
                        key={value.id}
                        item={value}
                        showPosts={showPosts}
                    />)
                }
            </div>

            <div>
                <h2>Show all comments:</h2>
                <div>
                    {
                        posts.map((value, index) => <Comments
                            key={index}
                            item={value}
                        />)
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
