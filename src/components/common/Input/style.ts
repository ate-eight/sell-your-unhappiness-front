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
    padding: ${(props) => (props.$padding ? `${props.$padding}` : '20px 14px')};
`;
export const CommentInputWrapper = styled.div<{ $height?: string; $padding?: string }>`
    display: flex;
    justify-content: space-between;
    padding: 20px 14px;
    border-radius: 10px;
    height: ${(props) => (props.$height ? `${props.$height}` : 'unset')};
    padding: ${(props) => (props.$padding ? `${props.$padding}` : '20px 14px')};
    background-color: ${(props) => props.theme.color.gray[100]};
`;
