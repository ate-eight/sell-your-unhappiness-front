import styled from '@emotion/styled';

export const Button = styled.button`
    cursor: pointer;

    padding: 8px 18px;

    color: ${(props) => props.theme.color.gray[100]};
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 600;
    line-height: 26px;

    border: none;
    border-radius: 6px;

    background-color: ${(props) => props.theme.color.purple[800]};
`;
