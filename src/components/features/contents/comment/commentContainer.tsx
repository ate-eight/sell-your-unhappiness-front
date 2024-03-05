import { ICommentResponse } from '@/api/comment';

import * as S from '../style';
import Comment from './commentTheme';

interface ICommentProps {
    commentData: ICommentResponse;
}

const CommentContainer = ({ commentData }: ICommentProps) => {
    return (
        <>
            {commentData.contents.map((commentData: ICommentResponse, idx: number) => (
                <S.CommentArea key={idx}>
                    <Comment commentData={commentData} />
                </S.CommentArea>
            ))}
        </>
    );
};

export default CommentContainer;
