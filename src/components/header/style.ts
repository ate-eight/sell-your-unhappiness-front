import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Header = styled.header`
    box-sizing: border-box;

    height: 62px;

    padding: 14px 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    color: white;

    background-color: ${(props) => props.theme.color.navy[900]};

    & > h1 {
        cursor: pointer;

        padding: 10px 20px;
        margin: 0;

        font-family: Pretendard;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 26px;
    }
`;

export const TabBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

export const Tab = styled(Link)`
    cursor: pointer;

    padding: 0;

    border: none;

    background-color: inherit;
`;
