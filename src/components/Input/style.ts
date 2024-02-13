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

    ::placeholder {
        color: ${(props) => props.theme.color.gray[400]};
        font-weight: ${(props) => props.theme.typography.weight[400]};
    }

    &:focus {
        outline: none;
    }
`;

export const DefaultInputWrapper = styled.div`
    padding: 20px 14px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.color.gray[100]};
`;
export const CommentInputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 14px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.color.gray[100]};
`;
