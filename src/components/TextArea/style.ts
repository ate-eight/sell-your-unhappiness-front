import styled from '@emotion/styled';

export const TextArea = styled.textarea`
    background-color: inherit;
    padding: 0;
    width: 100%;
    border: none;
    resize: none;
    height: 55vh;

    color: ${(props) => props.theme.color.gray[800]};
    font-family: ${(props) => props.theme.typography.type.Regular};
    font-size: ${(props) => props.theme.typography.size.m1}px;
    font-style: normal;
    font-weight: ${(props) => props.theme.typography.weight[400]};
    line-height: ${(props) => props.theme.typography.lineHeight.m1}px;

    ::placeholder {
        color: ${(props) => props.theme.color.gray[400]};
        font-weight: ${(props) => props.theme.typography.weight[400]};
    }

    &:focus {
        outline: none;
    }
`;

export const TextAreaWrapper = styled.div`
    padding: 20px 14px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.color.gray[100]};
`;
