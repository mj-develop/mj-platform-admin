import React from 'react';

import SelectInput from '../../components/SelectInput';
import ContentHeader from '../../components/ContentHeader';

import ItemList from '../../components/ItemList';


import { Container, Content } from './styles';

const List: React.FC = () => {
    const options = [
        {value: 'test', label: 'test'}
    ];

    return (
        <Container>
            <ContentHeader title="Listagem" lineColor="#FFF"> 
                <SelectInput options={options}/>
            </ContentHeader>

            <Content>
                <ItemList
                    cardColor="#313862"
                    tagColor="#FFF"
                    title="Título"
                    subtitle="Subtítulo"
                    amount="none"
                />
            </Content>
        </Container>
    );
}

export default List;