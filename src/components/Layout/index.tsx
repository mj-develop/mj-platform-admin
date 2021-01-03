import React from 'react';

import { Container } from './styles';

import MainHeader from '../MainHeader';
import Sidebar from '../Sidebar';
import Content from '../Content';

const Layout: React.FC = ({children}) => {
    return (
        <Container>
            <MainHeader/>
            <Sidebar/>
            <Content> 
                { children }
            </Content>
        </Container>
    );
}

export default Layout;
