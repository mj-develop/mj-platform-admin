import React, { useMemo } from 'react';

import SelectInput from '../../components/SelectInput';
import ContentHeader from '../../components/ContentHeader';

import ItemList from '../../components/ItemList';

import { Container, Content, Filters } from './styles';

interface IRouteParams {
    match: {
        params: {
            type: string
        }
    }
}

const List: React.FC<IRouteParams> = ({ match }) => {
    const { type } = match.params;

    const title = useMemo(() => {
        return type === 'teachers' ? 'Professores' : 'Alunos';
    }, [type]);

    const lineColor = useMemo(() => {
        return type === 'teachers' ? '#F7931B' : '#E44C4E';
    }, [type]);
    
    const months = [
        {value: 7, label: 'Julho'},
        {value: 8, label: 'Agosto'},
        {value: 9, label: 'Setembro'},
    ];

    const years = [
        {value: 2020, label: 2020},
        {value: 2019, label: 2019},
        {value: 2018, label: 2018},
    ];

    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}> 
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-filter tag-color-a"> Recorrentes </button>
                <button type="button" className="tag-filter tag-color-b"> Recorrentes </button>
            </Filters>
            
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