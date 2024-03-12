import styled from '@emotion/styled';

export const Input = styled.input`
    background-color: inherit;
    padding: 0;
    width: 100%;
    color: ${(props) => props.theme.color.gray[800]};
    font-family: ${(props) => props.theme.typography.type.Regular};
    font-size: ${(props) => props.theme.typography.size.m1}px;
    font-style: normal;
    font-weight: ${(props) => props.theme.typography.weight[400]};
    border: none;
    line-height: ${(props) => props.theme.typography.lineHeight.m1}px;

    ::placeholder {
        color: ${(props) => props.theme.color.gray[400]};
        font-weight: ${(props) => props.theme.typography.weight[400]};
    }

    &:focus {
        outline: none;
    }
`;

export const DefaultInputWrapper = styled.div<{ $height?: string; $padding?: string }>`
    border-radius: 10px;
    background-color: ${(props) => props.theme.color.gray[100]};
    height: ${(props) => (props.$height ? `${props.$height}` : 'unset')};
    display: flex;
    align-items: center;
    padding: ${(props) => (props.$padding ? `${props.$padding}` : '20px 14px')};
`;

export const CommentInputWrapper = styled.div<{ $height?: string; $padding?: string }>`
    height: ${(props) => (props.$height ? `${props.$height}` : 'unset')};
    padding: 0 14px;

    display: flex;
    justify-content: space-between;

    background-color: ${(props) => props.theme.color.gray[100]};
    border-radius: 10px;
`;

export const SubmitButton = styled.button<{ $disabled?: boolean }>`
    cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: inherit;
    border: none;
`;
