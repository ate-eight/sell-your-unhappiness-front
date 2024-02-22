import styled from '@emotion/styled';

export const LocationContainer = styled.div`
    width: auto;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.color?.navy[900]};
    padding: 16px 20px 16px 20px;
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

export const HeaderLink = styled.a`
    width: auto;
    height: auto;
    text-decoration-line: none;
`;

export const LinkContainer = styled.div`
    gap: 15px;
    display: flex;
`;
