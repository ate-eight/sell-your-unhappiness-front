import { ICommentResponse } from '@/api/comment';

import * as S from '../style';
import Comment from './commentTheme';

interface ICommentProps {
    commentsData: ICommentResponse;
}

const CommentContainer = ({ commentsData }: ICommentProps) => {
    return (
        <>
            {commentsData &&
                Array.isArray(commentsData.contents) && // Check if contents is an array
                commentsData.contents.map((comment: ICommentResponse) => (
                    <S.CommentArea key={comment.id}>
                        <Comment commentsData={comment} />
                    </S.CommentArea>
                ))}
        </>
    );
};

export default CommentContainer;
