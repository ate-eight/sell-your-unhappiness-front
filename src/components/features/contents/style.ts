import styled from '@emotion/styled';

export const Wrapper = styled.div`
    background-color: ${(props) => props.theme.color.navy[900]};
`;

export const Container = styled.div<{ border?: string }>`
    background-color: ${(props) => props.theme.color.gray[50]};

    height: 100%;
    border-radius: 20px 20px 0 0;
    display: flex;
    flex-wrap: wrap;
    & > div:nth-of-type(1) {
        border-bottom: ${(props) => props.border && `${props.border}`};
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

export const TitleWrapper = styled.div`
    width: 100%;
    padding: 30px 20px 20px;
    gap: 10px 0;
    display: flex;
    flex-direction: column;
`;
export const TopArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const ContentContainer = styled.div`
    width: 100%;
    padding: 20px 20px 60px 20px;
`;

export const CommentWrapper = styled.div<{ detail?: boolean }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    cursor: ${(props) => !props.detail && 'pointer'};
    position: relative;
    min-height: ${(props) => props.detail && 'calc(100vh - 56px)'};
    & > h4 {
        padding: 0 20px 20px;
    }

    & > div:has(input) {
        width: calc(100% - 40px);
        margin: ${(props) => !props.detail && '10px 20px 0'};
    }
`;

export const InputArea = styled.div`
    position: absolute;
    bottom: -57px;
    left: 20px;
    gap: 10px 0;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
`;

export const CommentArea = styled.div<{ paddingLeft?: string }>`
    display: flex;
    flex-wrap: wrap;
    gap: 12px 0;
    padding: ${(props) =>
        props.paddingLeft ? `16px 20px 16px ${props.paddingLeft}` : '16px 20px'};
    & > .tagArea {
        width: 100%;
        display: flex;
        gap: 16px 0;
        flex-direction: column;
    }
`;

export const IconArea = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    color: ${(props) => props.theme.color.gray[300]};
    border: 1px solid ${(props) => props.theme.color.gray[300]};
    border-radius: 4px;
    padding: 2px 10px;
    gap: 0 4px;

    & > svg {
        width: 20px;
        display: flex;
    }
`;
export const ButtonWrapper = styled.div`
    width: 100%;
    background-color: #fff;
    display: flex;
    padding: 20px;
    gap: 0 10px;
    & > button {
        flex-grow: 1;
    }
`;
