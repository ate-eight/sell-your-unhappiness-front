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
                commentsData.contents.map((commentsData: ICommentResponse) => (
                    <S.CommentArea key={commentsData.id}>
                        <Comment commentsData={commentsData} />
                    </S.CommentArea>
                ))}
        </>
    );
};

export default CommentContainer;
