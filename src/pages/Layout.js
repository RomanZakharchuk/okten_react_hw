import React, {Component} from 'react';
import {Link, Outlet} from "react-router-dom";
import styled from "styled-components";

class Layout extends Component {
    render() {
        return (
            <div>
                <Header>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'users'}>Users</Link></li>
                        <li><Link to={'posts'}>Posts</Link></li>
                        <li><Link to={'comments'}>Comments</Link></li>
                    </ul>
                </Header>

                <Main>
                    <Outlet/>
                </Main>
            </div>
        );
    }
}

export default Layout;

const Header = styled.div`
    background:  yellow;
    min-height: 100px;
    ul {
        display: flex;
        justify-content: center;
        li {
            text-decoration: none;
            list-style: none;
            margin-left: 30px;
        }
    }
`;

const Main = styled.div`
    background:  deepskyblue;
    min-height: 900px;
`;