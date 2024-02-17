import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LocationContainer = styled.div`
    width: 390px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.color.navy[900]};
    padding: 14px 20px 14px 20px;
`;

export const ButContainer = styled.div`
    gap: 5px;
    display: flex;
`;

export const Button = styled.button<{ cursor?: string }>`
    width: auto;
    height: auto;
    border: none;
    cursor: pointer;
    background: transparent;
    ${(props) =>
        `
        cursor:${props.cursor};
    `}
`;

export const HeaderLink = styled(Link)`
    width: auto;
    height: auto;
    text-decoration-line: none;
`;
