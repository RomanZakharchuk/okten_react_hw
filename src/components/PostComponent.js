import React, {Component} from 'react';

class PostComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, body} = this.props.item;

        return (
            <div>
                <ul>
                    <li>TITLE: {title}. BODY: {body}</li>
                </ul>
            </div>
        );
    }
}

export default PostComponent;