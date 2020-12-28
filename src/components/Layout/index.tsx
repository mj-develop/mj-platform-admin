import React from 'react';

import { Container } from './styles';

import MainHeader from '../MainHeader';
import Sidebar from '../Sidebar';
import Content from '../Content';

const Layout: React.FC = () => {
    return (
        <Container>
            <MainHeader/>
            <Sidebar/>
            <Content/>
        </Container>
    );
}

export default Layout;
