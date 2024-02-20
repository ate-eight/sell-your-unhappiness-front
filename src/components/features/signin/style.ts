import styled from '@emotion/styled';

export const Container = styled.div`
    height: 100%;

    position: relative;
`;

export const Wrapper = styled.div`
    padding: 0 20px;

    position: absolute;
    top: 50%;
    left: 0;
    right: 0;

    transform: translateY(-50%);
`;

export const LogoImageWrapper = styled.div`
    width: 236px;
    height: 236px;

    margin: 0 auto;

    border-radius: 6px;

    overflow: hidden;
`;

export const InfoBox = styled.div`
    padding-top: 120px;
    padding-bottom: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    & > p {
        text-align: center;

        width: 192px;
    }
`;

export const GoogleButton = styled.button`
    width: 100%;
    height: 50px;

    bottom: 20px;

    color: ${(props) => props.theme.color.gray[700]};
    font-size: ${(props) => props.theme.typography.size.m1}px;

    border: 1px solid ${(props) => props.theme.color.gray[300]};
    border-radius: 6px;

    background-color: ${(props) => props.theme.color.gray[100]};
`;
