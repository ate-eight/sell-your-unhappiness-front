import SubTitle from '@components/common/text/SubTitle';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ICommentAdd, useCommentAdd, useCommentById } from '@/api/comment';
import Divider from '@/components/common/divider/divider';
import Input from '@/components/common/Input/Input';
import CommentContainer from '@/components/features/contents/comment/commentContainer';

import * as S from '../style';

export interface IButtonData {
    label: string;
    color: 'primary' | 'secondary';
}
const ContentContainer = () => {
    const { id } = useParams();
    const { data: commentsData } = useCommentById(Number(id));
    const [inputValue, setinputValue] = useState('');
    const handleValueChange = useCallback((value: string) => {
        setinputValue(value);
    }, []);

    const { mutate: addComment, isError, isSuccess } = useCommentAdd();

    /**
     * react-query mutation으로 query-key update
     */
    const handleCommentSubmit = async () => {
        const obj: ICommentAdd = {
            boardId: Number(id),
            content: inputValue,
        };

        addComment(obj);
    };

    useEffect(() => {
        if (!isError && isSuccess) {
            setinputValue('');
        }
    }, [isError, isSuccess]);

    return (
        <S.Wrapper>
            <S.Container>
                {/* 댓글 영역 */}
                <S.CommentWrapper detail={true}>
                    <SubTitle lan='ENG' text={`댓글 ${commentsData?.contents.length}`} />
                    <Divider size={6} />

                    {commentsData && <CommentContainer commentsData={commentsData} />}
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
