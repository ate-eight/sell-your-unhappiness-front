import SubTitle from '@components/common/text/SubTitle';
import { useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useCommentById } from '@/api/comment';
import { useContentsById } from '@/api/contents';
import Button from '@/components/common/Button/Button';
import Divider from '@/components/common/divider/divider';
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

    const [inputValue, setInputValue] = useState('');

    const handleValueChange = useCallback((value: string) => {
        setInputValue(value);
    }, []);

    const navigate = useNavigate();
    const handleMoveComment = useCallback(() => navigate(`/contents/${id}/comment`), []);

    const buttonData: Array<IButtonData> = [
        { label: 'Skip', color: 'secondary' },
        { label: 'Buy', color: 'primary' },
    ];

    const { data: contentsData } = useContentsById(Number(id));
    const { data: commentsData } = useCommentById(Number(id));

    return (
        <S.Wrapper>
            <S.Container>
                {contentsData && commentsData && (
                    <>
                        {/* 타이틀 영역 */}
                        <TitleContainer contentsData={contentsData} />
                        <Divider size={6} />
                        {/* 글 영역 */}
                        <S.ContentContainer>
                            <ContentTag as='M' text={contentsData.content} />
                        </S.ContentContainer>
                        <Divider color={300} />
                        {/* 댓글 영역 */}
                        <S.CommentWrapper onClick={handleMoveComment}>
                            <SubTitle lan='ENG' text={`댓글 ${commentsData.contents.length}`} />
                            <CommentContainer commentsData={commentsData} />
                            <Input
                                placeholder={'댓글을 남겨보세요.'}
                                as={'Comment'}
                                value={inputValue}
                                handleOnChange={handleValueChange}
                            />
                        </S.CommentWrapper>
                        <Divider size={6} />
                    </>
                )}
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
