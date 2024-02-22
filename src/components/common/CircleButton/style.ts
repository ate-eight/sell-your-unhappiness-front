import styled from '@emotion/styled';

export const Button = styled.button<{ $isPointer: boolean; $size: 'lg' | 'sm' }>`
    cursor: ${(props) => (props.$isPointer ? 'pointer' : 'default')};

    ${(props) => {
        if (props.$size === 'lg') {
            return `
                width: 70px;
                height: 70px;

                padding: 12px;
            `;
        }
        if (props.$size === 'sm') {
            return `
                width: 30px;
                height: 30px;

                padding: 6px;
            `;
        }
    }}

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 50%;

    position: fixed;
    bottom: 3%;
    right: 3%;
`;
