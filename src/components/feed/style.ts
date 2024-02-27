import styled from '@emotion/styled';

export const FeedContainer = styled.div<{ isFeedUi: boolean }>`
    width: auto;
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    gap: ${(props) => (props.isFeedUi ? '0px' : '30px')};
    border-bottom: 8px solid ${({ theme }) => theme.color && theme.color.gray[100]};
    height: ${(props) => (props.isFeedUi ? '90px' : '284px')};
`;

export const FeedWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FeedButtonWrapper = styled.div`
    width: auto;
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
    color: #d9d9d9;
`;

export const FeedButton = styled.button`
    display: flex;
    gap: 3px;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: #fff;
`;

export const FeedTitleWrapper = styled.div<{ isFeedUi: boolean }>`
    width: auto;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    ${(props) => {
        if (!props.isFeedUi) {
            return `
            border-bottom: 1px solid ${props.theme.color && props.theme.color.gray[100]}
            `;
        }
    }};
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
