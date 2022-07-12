import React, {Component} from 'react';

import {ApiService} from "../services/api.service";
import UserComponent from "../components/UserComponent";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
         this.apiService = new ApiService();
         this.apiService.getUsers('users').then(value => this.setState({users: value}))
    }

    render() {
        const {users} = this.state;

        return (
            <div>
                {users.map(user => <UserComponent
                    key={user.id}
                    item={user}
                />)}
            </div>
        );
    }
}

export default Users;