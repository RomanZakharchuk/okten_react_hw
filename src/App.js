import './App.css';
import Users from "./components/users";
import {useEffect, useState} from "react";
import {getUsers} from "./services/userService";
import User from "./components/user";

function App() {
    let [users, setUsers] = useState([]);
    let [aboutUser, setAboutUser] = useState({});

    useEffect(() => {
        getUsers().then(value => setUsers(value));
    }, []);

    const showInfo = (item) => {
        setAboutUser(item);
    }

  return (
    <div className="App">
        <div className='title'>About Users:</div>
        <div className='wrap_users'>
            {users.map((post, index) => <Users
                key={index}
                item={post}
                showInfo={showInfo}
            />)}
        </div>
        <div className='info_user'>
            {aboutUser.id && <User item={aboutUser}/>}
        </div>
    </div>
  );
}

export default App;
