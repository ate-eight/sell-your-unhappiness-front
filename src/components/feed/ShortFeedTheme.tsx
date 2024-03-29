import Icon from '@components/common/icon/Icon';
import CaptionTag from '@components/common/text/CaptionTag';
import SubTitle from '@components/common/text/SubTitle';
import { useNavigate } from 'react-router-dom';

import { IBoardContent } from '@/api/boards';
import theme from '@/styles/theme';

import * as S from './style';

interface Props {
    data: IBoardContent;
}
const ShortFeedTheme = ({ data }: Props) => {
    const { id, title, createTime } = data;
    const navigate = useNavigate();
    const handleMoveDetail = () => navigate(`/contents/${id}`);

    return (
        <S.FeedContainer $isFeedUi={true} id='short-feed'>
            <S.FeedWrapper $isFeedUi={true}>
                <S.FeedTitleWrapper onClick={handleMoveDetail}>
                    <SubTitle text={title} lan='KR' />
                </S.FeedTitleWrapper>
                <S.FeedButtonWrapper>
                    <CaptionTag text='sold out' as='M' color={theme.color.purple[500]} />|
                    <S.FeedButton>
                        <Icon name='i-message' color='#d9d9d9' />
                        <CaptionTag text={'10'} as='M' color='#d9d9d9' />
                    </S.FeedButton>
                </S.FeedButtonWrapper>
            </S.FeedWrapper>

            <S.FeedDate>
                <CaptionTag as='M' text={createTime} />
            </S.FeedDate>
        </S.FeedContainer>
    );
};
export default ShortFeedTheme;
