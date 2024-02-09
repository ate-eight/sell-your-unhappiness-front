import styled from '@emotion/styled';

export const Button = styled.button<{ $isPointer: boolean }>`
    cursor: ${(props) => (props.$isPointer ? 'cursor' : 'default')};

    width: 70px;
    height: 70px;

    border: none;
    border-radius: 50%;

    background-color: ${(props) => props.theme.color.purple[800]};
`;
