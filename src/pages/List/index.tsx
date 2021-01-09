import React, { useMemo, useState, useEffect } from 'react';

import SelectInput from '../../components/SelectInput';
import ContentHeader from '../../components/ContentHeader';

import ItemList from '../../components/ItemList';

import { Container, Content, Filters } from './styles';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';

interface IRouteParams {
    match: {
        params: {
            type: string
        }
    }
}

interface IData {
    id: string
    description: string;
    amountFormatted: string;
    frequency: string;
    dataFormatted: string;
    tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
    const [data, setData] = useState<IData[]>([]);

    const { type } = match.params;

    const title = useMemo(() => {
        return type === 'teachers' ? 'Professores' : 'Alunos';
    }, [type]);

    const lineColor = useMemo(() => {
        return type === 'teachers' ? '#F7931B' : '#E44C4E';
    }, [type]);
    
    const listData = useMemo(() => {
        return type === 'teachers' ? gains : expenses;
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

    useEffect(() => {
        const response = listData.map(item => {
            return {
                id: String(Math.random() * data.length),
                description: item.description,
                amountFormatted: item.amount,
                frequency: item.frequency,
                dataFormatted: item.date,
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
            }
        });

        setData(response);
    }, []);

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
                {
                    data.map(item => (
                        <ItemList
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dataFormatted}
                            amount={item.amountFormatted}
                        />
                    ))
                }
            </Content>
        </Container>
    );
}

export default List;