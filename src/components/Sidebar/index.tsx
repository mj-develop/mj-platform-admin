import React from 'react';

import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';

import logoImg from '../../assets/logo.svg'

import { Container, Header, LogoImg, MenuContainer, MenuItemLink, Title } from './styles';

const Sidebar: React.FC = () => {
    return (
        <Container>
           <Header>
               <LogoImg src={logoImg} alt="Logo Aprender"/>
               <Title> Aprender Portal </Title>
           </Header>

           <MenuContainer>
                <MenuItemLink href="/dashboard">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="/list/teachers">
                    <MdArrowUpward/>
                    Professores
                </MenuItemLink>

                <MenuItemLink href="/students">
                    <MdArrowDownward/>
                    Alunos
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdExitToApp/>
                    Sair                
                </MenuItemLink>
           </MenuContainer>
        </Container>
    );
}

export default Sidebar;
