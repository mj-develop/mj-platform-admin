import React, {useMemo} from 'react';

import { Container, Profile, Welcome, Username } from './styles';

import emojis from '../../utils/emojis';
import Toggle from '../Toggle/index';

const MainHeader: React.FC = () => {
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    },[])

    return (
        <Container>
            <Toggle> </Toggle>

            <Profile>
                <Welcome> Olá, {emoji}</Welcome>
                <Username> Username </Username>
            </Profile>
        </Container>
    );
}

export default MainHeader;
