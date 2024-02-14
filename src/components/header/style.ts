import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Header = styled.div<{ type: 'Navigation' | 'Location' | 'Header' }>`
    width: 390px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.color.navy[900]};
    ${(props) => {
        if (props.type === 'Header' || props.type === 'Location') {
            return `
                padding: 14px 20px 14px 20px;
            `;
        }
        if (props.type === 'Navigation') {
            return `
                padding: 16px 20px 16px 20px;
            `;
        }
    }}
`;

export const Logo = styled(Link)`
    width: 70px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
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

export const LinkContainer = styled.div`
    gap: 15px;
    display: flex;
`;
