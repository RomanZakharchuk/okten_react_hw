import React, {Component} from 'react';

class CommentComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, email, body} = this.props.item;

        return (
            <div>
                <ul>
                    <li>
                        <h3>NAME: {name}</h3>
                        <h4>EMAIL: {email}</h4>
                        <p>BODY: {body}</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CommentComponent;