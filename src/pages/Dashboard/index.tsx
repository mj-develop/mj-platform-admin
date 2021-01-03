import React from 'react';

import SelectInput from '../../components/SelectInput';
import ContentHeader from '../../components/ContentHeader';

import { Container } from './styles';

const Dashboard: React.FC = () => {
    const options = [
        {value: 'test', label: 'test'}
    ];

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#FFF"> 
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;