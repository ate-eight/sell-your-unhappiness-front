import styled from '@emotion/styled';

export const LnbContainer = styled.div`
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    height: 84px;
    border-radius: 30px 30px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.color.gray[300]};
`;

export const ButWrapper = styled.div`
    display: flex;
    gap: 5px;
    position: relative;
    padding-left: 5%;
    padding-right: 5%;
    width: 100%;
    top: 3%;
    user-select: none;
    cursor: pointer;
    transition: all 1s ease-in-out;
    overflow-x: scroll;
    overflow-y: hidden;
    ::-webkit-scrollbar {
        display: none;
    }
`;
