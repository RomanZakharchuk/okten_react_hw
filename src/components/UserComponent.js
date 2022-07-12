import React, {Component} from 'react';

class UserComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {id, name, email} = this.props.item;
        
        return (
            <div>
                <ul>
                    <li>{id}: {name}. Email: {email}</li>
                </ul>
            </div>
        );
    }
}

export default UserComponent;