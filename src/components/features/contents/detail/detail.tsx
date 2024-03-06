import SubTitle from '@components/common/text/SubTitle';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getComment } from '@/api/comment';
import { ICommentResponse } from '@/api/comment';
import { getContentDetail } from '@/api/contents';
import { IContentResponse } from '@/api/contents';
import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import ContentTag from '@/components/common/text/ContentTag';
import CommentContainer from '@/components/features/contents/comment/commentContainer';
import TitleContainer from '@/components/features/contents/detail/titleContainer';

import * as S from '../style';

export interface IButtonData {
    label: string;
    color: 'primary' | 'secondary';
}

const ContentContainer = () => {
    const { id } = useParams();

    const [commentsData, setCommentsData] = useState<ICommentResponse>();
    const [contentsData, setContentsData] = useState<IContentResponse>();
    const [inputValue, setInputValue] = useState('');

    const handleValueChange = useCallback((value: string) => {
        setInputValue(value);
    }, []);

    const buttonData: Array<IButtonData> = [
        { label: 'Skip', color: 'secondary' },
        { label: 'Buy', color: 'primary' },
    ];

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const contentApiData = await getContentDetail(Number(id));
                const commentApiData = await getComment(Number(id));
                if (commentApiData != undefined && contentApiData != undefined) {
                    setCommentsData(commentApiData);
                    setContentsData(contentApiData);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchContent();
    }, [id]);

    // useEffect 함수 실행에 따른 contentsData null 처리
    if (!contentsData || !commentsData) {
        return null;
    }
    return (
        <S.Wrapper>
            <S.Container>
                {/* 타이틀 영역 */}
                <TitleContainer contentsData={contentsData} />
                {/* 글 영역 */}
                <S.ContentContainer>
                    <ContentTag as='M' text={contentsData.content} />
                </S.ContentContainer>
                {/* 댓글 영역 */}
                <S.CommentWrapper>
                    <SubTitle lan='ENG' text={`댓글 ${commentsData.contents.length}`} />
                    <CommentContainer commentsData={commentsData} />
                    <Input
                        placeholder={'댓글을 남겨보세요.'}
                        as={'Comment'}
                        value={inputValue}
                        handleOnChange={handleValueChange}
                    />
                </S.CommentWrapper>
            </S.Container>

            {/* 버튼 영역 */}
            <S.ButtonWrapper>
                {buttonData.map((b, index) => (
                    <Button
                        key={index}
                        label={b.label}
                        color={b.color as 'secondary' | 'primary'}
                        styleProps={{
                            height: '48px',
                            fontSize: '18px',
                        }}
                    />
                ))}
            </S.ButtonWrapper>
        </S.Wrapper>
    );
};

export default ContentContainer;
