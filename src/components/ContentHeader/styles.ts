import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;

    > h1 {
        color: ${props => props.theme.colors.white};
    }
`;

export const TitleContainer = styled.div `
    &::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.theme.colors.warning}
    }
`; 

export const Controllers = styled.div`
`;