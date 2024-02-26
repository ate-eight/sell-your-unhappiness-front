import styled from '@emotion/styled';

export const Wrapper = styled.div`
    background-color: ${(props) => props.theme.color.navy[900]};
`;

export const Container = styled.div`
    background-color: ${(props) => props.theme.color.gray[50]};

    height: 100%;
    border-radius: 20px 20px 0 0;
    display: flex;
    flex-wrap: wrap;
    & > div:nth-of-type(1) {
        border-bottom: none;
    }
`;

export const ContentArea = styled.div`
    width: 100%;
    margin-bottom: 65px;
`;

export const ContentTitle = styled.div`
    padding: 10px 20px 5px;
`;

export const ContentText = styled.div`
    padding: 5px 20px;
`;

export const ContentCount = styled.div`
    padding: 0 20px;
    display: flex;
    justify-content: flex-end;
    font-size: ${(props) => props.theme.typography.size.s2}px;
    line-height: ${(props) => props.theme.typography.lineHeight.s2}px;
    color: ${(props) => props.theme.color.gray[400]};
`;
