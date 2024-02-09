import styled from '@emotion/styled';

export const Button = styled.button<{ $color: string; $full: boolean; $disabled: boolean }>`
    cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};

    height: 48px;
    width: ${(props) => props.$full && '100%'};

    padding: 13px 66.5px;

    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;

    border: none;
    border-radius: 6px;

    ${(props) => {
        if (props.$color === 'primary') {
            if (props.$disabled) {
                return `
                        background-color : ${props.theme.color.navy[50]};
                        color: ${props.theme.color.gray[50]};
                    `;
            } else {
                return `
                        background-color : ${props.theme.color.purple[800]};
                        color: ${props.theme.color.gray[50]};
                    `;
            }
        }
        if (props.$color === 'secondary') {
            if (props.$disabled) {
                return `
                        background-color : ${props.theme.color.gray[50]};
                        color: ${props.theme.color.navy[50]};
                    `;
            } else {
                return `
                        background-color : ${props.theme.color.gray[50]};
                        color: ${props.theme.color.gray[700]};
                    `;
            }
        }
    }}

    &:hover {
        ${(props) =>
            props.$disabled ||
            `
                background-color : ${props.theme.color.purple[900]};
                color: ${props.theme.color.gray[50]};
            `}
    }
`;
