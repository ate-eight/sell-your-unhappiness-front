import SubTitle from '@components/common/text/SubTitle';
import { useParams } from 'react-router-dom';

import Divider from '@/components/common/divider/divider';
import Input from '@/components/common/Input/Input';
import CommentContainer from '@/components/features/contents/comment/commentContainer';
import useComment from '@/hooks/useComment';

import * as S from '../style';

export interface IButtonData {
    label: string;
    color: 'primary' | 'secondary';
}
const ContentContainer = () => {
    const { id } = useParams();

    const { commentsData, inputValue, handleValueChange, handleCommentSubmit } = useComment(id);

    return (
        <S.Wrapper>
            <S.Container>
                {/* 댓글 영역 */}
                <S.CommentWrapper detail={true}>
                    <SubTitle lan='ENG' text={`댓글 ${commentsData?.contents.length ?? 0}`} />
                    <Divider size={6} />

                    <CommentContainer commentsData={commentsData} />
                    <S.InputArea>
                        <Divider color={300} />
                        <Input
                            placeholder={'댓글을 남겨보세요.'}
                            as={'Comment'}
                            value={inputValue}
                            handleOnChange={handleValueChange}
                            handleOnClick={handleCommentSubmit}
                        />
                    </S.InputArea>
                </S.CommentWrapper>
            </S.Container>
        </S.Wrapper>
    );
};

export default ContentContainer;
