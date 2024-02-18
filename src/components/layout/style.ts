import styled from '@emotion/styled';

export const Container = styled.div`
    max-width: ${(props) => props.theme.screen.maxWidth};
    min-width: ${(props) => props.theme.screen.minWidth};
    width: 100%;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);

    margin: 0 auto;
`;
