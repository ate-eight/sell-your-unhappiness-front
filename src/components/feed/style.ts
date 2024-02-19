import styled from '@emotion/styled';

export const FeedContainer = styled.div`
    width: auto;
    height: 284px;
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    gap: 30px;
    border-bottom: 8px solid ${(props) => props.theme.color.gray[100]};
`;

export const FeedTitleWrapper = styled.div`
    width: auto;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid ${(props) => props.theme.color.gray[100]};
`;

export const FeedTitle = styled.h2`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const FeedContent = styled.div`
    width: 100%;
    flex-shrink: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    display: -webkit-box;
`;

export const FeedDate = styled.div`
    width: auto;
    height: 8px;
`;
