import styled from '@emotion/styled';

export const TabContainer = styled.ul`
    width: 390px;
    height: 52px;
    display: flex;
    border-bottom: 1px solid #e4e4e4;
    padding: 0;
`;

export const TabItem = styled.li<{ isActive?: boolean }>`
    width: 195px;
    height: auto;
    outline: none;
    padding: 10px 20px 10px 20px;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
    ${(props) =>
        props.isActive &&
        `
    border-bottom: 2px solid ${props.theme.color.purple[500]};
    `}
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 26px;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;
