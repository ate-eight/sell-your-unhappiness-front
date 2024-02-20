import styled from '@emotion/styled';

export const LnbContainer = styled.div`
    width: 100%;
    background-color: #fff;
    height: 84px;
    border-radius: 30px 30px 0 0;
    position: relative;
    top: -28px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 0px -24px 0px;
    border-bottom: 1px solid ${(props) => props.theme.color.gray[300]};
`;

export const ButWrapper = styled.div`
    display: flex;
    gap: 5px;
    position: relative;
    left: 10%;
    top: 3%;
`;
