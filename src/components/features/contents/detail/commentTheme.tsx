import { memo } from 'react';

import Icon from '@/components/common/icon/Icon';
import CaptionTag from '@/components/common/text/CaptionTag';
import ContentTag from '@/components/common/text/ContentTag';
import SubTitle from '@/components/common/text/SubTitle';
import theme from '@/styles/theme';

import * as S from '../style';

interface CommentProps {
    nickname: string;
    content: string;
    date: string;
}

const Comment = ({ nickname, content, date }: CommentProps) => (
    <>
        <SubTitle lan='ENG' text={nickname} />
        <S.IconArea>
            <Icon name='i-thumb-up' color={theme.color.gray[400]} />Ι
            <Icon name='i-message' color={theme.color.gray[400]} />
        </S.IconArea>
        <ContentTag as='M' text={content} />
        <CaptionTag as='M' text={date} color={'#B6B6B6'} />
    </>
);

export default Comment;
