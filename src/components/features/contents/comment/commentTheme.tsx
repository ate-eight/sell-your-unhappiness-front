import { ICommentResponse } from '@/api/comment';
import Icon from '@/components/common/icon/Icon';
import CaptionTag from '@/components/common/text/CaptionTag';
import ContentTag from '@/components/common/text/CaptionTag';
import SubTitle from '@/components/common/text/SubTitle';
import theme from '@/styles/theme';

import * as S from '../style';
interface ICommentProps {
    commentsData: ICommentResponse;
}

const Comment = ({ commentsData: { id, content, createTime } }: ICommentProps) => {
    const formattedCreateTime = new Date(createTime).toISOString().split('T')[0];

    return (
        <>
            <SubTitle lan='ENG' text={`익명 ${id}`} />
            <S.IconArea>
                <Icon name='i-thumb-up' color={theme.color.gray[400]} />Ι
                <Icon name='i-message' color={theme.color.gray[400]} />
            </S.IconArea>
            <div className='tagArea'>
                <ContentTag as='M' text={content} />
                <CaptionTag as='M' text={formattedCreateTime} color={'#B6B6B6'} />
            </div>
        </>
    );
};

export default Comment;
