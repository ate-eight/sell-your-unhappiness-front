import { ICommentResponse } from '@/api/comment';

import * as S from '../style';
import Comment from './commentTheme';

interface ICommentProps {
    commentsData: ICommentResponse;
}

const CommentContainer = ({ commentsData }: ICommentProps) => {
    return (
        <>
            {commentsData.contents.map((commentsData: ICommentResponse, idx: number) => (
                <S.CommentArea key={idx}>
                    <Comment commentsData={commentsData} />
                </S.CommentArea>
            ))}
        </>
    );
};

export default CommentContainer;
