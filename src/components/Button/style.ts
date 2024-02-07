import styled from '@emotion/styled';

export const Button = styled.button<{ $color: string; $full: boolean; $disabled: boolean }>`
    cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};

    height: 48px;
    width: ${(props) => props.$full && '100%'};

    padding: 13px 66.5px;

    color: ${(props) => props.theme.color.gray[100]};
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;

    border: none;
    border-radius: 6px;

    ${(props) => {
        if (props.$color === 'primary') {
            return `background-color : ${props.theme.color.purple[800]}`;
        }
        if (props.$color === 'secondary') {
            return `background-color : ${props.theme.color.navy[50]}`;
        }
        return `background-color : ${props.$color}`;
    }}
`;
