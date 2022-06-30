import {useEffect, useState} from "react";

import './Users.css';
import {getUsers} from "../../services";
import User from "../user";

const  Users = ({showPosts}) =>  {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]));
    }, []);

    return (
        <div className='users_wrap'>
            {
                users.map(value => <User
                    key={value.id}
                    item={value}
                    showPosts={showPosts}
                />)
            }
        </div>
    )
}

export default Users;