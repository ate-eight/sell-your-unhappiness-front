import styled from '@emotion/styled';

export const Container = styled.div`
    max-width: ${(props) => props.theme.screen.maxWidth};
    min-width: ${(props) => props.theme.screen.minWidth};
    width: 100%;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);

    margin: 0 auto;
`;

export const ContentsHeader = styled.div`
    height: 62px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.theme.typography.size.m2}px;
    background-color: ${(props) => props.theme.color.navy[900]};
    color: ${(props) => props.theme.color.gray[50]};
`;
