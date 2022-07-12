import React, {Component} from 'react';
import {Outlet} from "react-router-dom";
import styled from "styled-components";

import HeaderComponent from "../components/HeaderComponent";

class Layout extends Component {
    render() {
        return (
            <div>
                <HeaderComponent/>
                <Main>
                    <Outlet/>
                </Main>
            </div>
        );
    }
}

export default Layout;

const Main = styled.div`
    background:  deepskyblue;
    min-height: 900px;
`;