import { ICommentInfo, ICommentResponse } from '@/api/comment';

import * as S from '../style';
import Comment from './commentTheme';

interface ICommentProps {
    commentsData: ICommentResponse;
}

const CommentContainer = ({ commentsData }: ICommentProps) => {
    if (!Array.isArray(commentsData.contents) && commentsData) return;

    return (
        <>
            {commentsData.contents.map((comment: ICommentInfo) => (
                <S.CommentArea key={comment.id}>
                    <Comment commentsData={comment} />
                </S.CommentArea>
            ))}
        </>
    );
};

export default CommentContainer;
