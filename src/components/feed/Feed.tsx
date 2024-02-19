import CaptionTag from '../text/CaptionTag';
import ContentTag from '../text/ContentTag';
import SubTitle from '../text/SubTitle';
import * as S from './style';
export interface FeedType {
    index: number;
    title: string;
    heart: number;
    comment: number;
    content: string;
    date: string;
}
interface Props {
    data: FeedType;
}
const Feed = ({ data }: Props) => {
    const { title, heart, comment, content, date } = data;
    console.log('title', heart, comment);

    return (
        <S.FeedContainer>
            <S.FeedTitleWrapper>
                <SubTitle text={title} lan='KR' />
            </S.FeedTitleWrapper>
            <S.FeedContent>
                <ContentTag as='M' text={content} />
            </S.FeedContent>
            <S.FeedDate>
                <CaptionTag as='M' text={date} />
            </S.FeedDate>
        </S.FeedContainer>
    );
};
export default Feed;
