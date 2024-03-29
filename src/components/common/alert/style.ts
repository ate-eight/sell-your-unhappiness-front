import styled from '@emotion/styled';

export const AlertContainer = styled.div`
    width: 100%;
    height: 90px;
    padding: 2px 0px 0px 16px;
    display: flex;
    justify-contenter: flex-start;
    align-items: center;
    border-bottom: 6px solid ${(props) => props.theme.color.gray[100]};
`;

export const IconWrapper = styled.div`
    width: 44px;
    height: 44px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: ${(props) => props.theme.color.gray[100]};
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 26px;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;
