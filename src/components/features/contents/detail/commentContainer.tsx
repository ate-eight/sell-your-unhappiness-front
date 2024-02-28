import React from 'react';

import * as S from '../style';
import Comment from './commentTheme';

interface ICommentData {
    id: number;
    nickname: string;
    heart: number;
    comment: number;
    content: string;
    date: string;
    recomment: ICommentData[];
}

const CommentContainer = () => {
    const ContArr: ICommentData[] = [
        {
            id: 0,
            nickname: '익명1',
            heart: 7,
            comment: 4,
            content:
                '이것은 댓글입니다. 댓글입니다. 이것은 댓글입니다. 이것은 댓글입니다. 댓글입니다. 이것은 댓글입니다. 이것은 댓글입니다. 댓글입니다. 이것은 댓글입니다.',
            date: '2024.01.01. 12:00',
            recomment: [
                {
                    id: 1,
                    nickname: '익명2',
                    heart: 7,
                    comment: 4,
                    content:
                        '이것은 답글입니다. 이것은 답글입니다.이것은 답글입니다.이것은 답글입니다.',
                    date: '2024.01.01. 12:00',
                    recomment: [],
                },
            ],
        },
    ];

    return (
        <>
            {ContArr.map((data) => (
                <React.Fragment key={data.id}>
                    <S.CommentArea>
                        <Comment nickname={data.nickname} content={data.content} date={data.date} />
                    </S.CommentArea>
                    {data.recomment.map((rec, index) => (
                        <S.CommentArea key={index} paddingLeft={'40px'}>
                            <Comment
                                nickname={rec.nickname}
                                content={rec.content}
                                date={rec.date}
                            />
                        </S.CommentArea>
                    ))}
                </React.Fragment>
            ))}
        </>
    );
};

export default CommentContainer;
