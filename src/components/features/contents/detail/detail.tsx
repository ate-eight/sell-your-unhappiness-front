import SubTitle from '@components/common/text/SubTitle';
import { useCallback } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { useContentsById } from '@/api/contents';
import Button from '@/components/common/Button/Button';
import Divider from '@/components/common/divider/divider';
import Input from '@/components/common/Input/Input';
import ContentTag from '@/components/common/text/ContentTag';
import CommentContainer from '@/components/features/contents/comment/commentContainer';
import TitleContainer from '@/components/features/contents/detail/titleContainer';
import useComment from '@/hooks/useComment';

import * as S from '../style';

export interface IButtonData {
    label: string;
    color: 'primary' | 'secondary';
}

const ContentContainer = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const { data: contentsData } = useContentsById(Number(id));
    const { commentsData } = useComment(id);

    const handleMoveComment = useCallback(() => navigate(`/contents/${id}/comment`), []);

    const buttonData: Array<IButtonData> = [
        { label: 'Skip', color: 'secondary' },
        { label: 'Buy', color: 'primary' },
    ];

    if (!contentsData) {
        alert('게시물이 존재하지 않습니다.');
        return <Navigate to={'/main'} />;
    }

    return (
        <>
            <S.Wrapper>
                <S.Container>
                    {/* 타이틀 영역 */}
                    <TitleContainer contentsData={contentsData} />
                    <Divider size={6} />
                    {/* 글 영역 */}
                    <S.ContentContainer>
                        <ContentTag as='M' text={contentsData.content} />
                    </S.ContentContainer>
                    <Divider color={300} />
                    {/* 댓글 영역 */}
                    <S.CommentWrapper>
                        <SubTitle lan='ENG' text={`댓글 ${commentsData.contents.length}`} />
                        <CommentContainer commentsData={commentsData} />
                        <div onClick={handleMoveComment}>
                            <Input placeholder={'댓글을 남겨보세요.'} as={'Default'} />
                        </div>
                    </S.CommentWrapper>
                    <Divider size={6} />
                </S.Container>
                {/* 버튼 영역 */}
                <S.ButtonWrapper>
                    {buttonData.map((b) => (
                        <Button
                            key={b.label}
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
        </>
    );
};

export default ContentContainer;
