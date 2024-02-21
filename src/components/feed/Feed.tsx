import LongFeedTheme from './LongFeedTheme';
import ShortFeedTheme from './ShortFeedTheme';

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
    isFeedUi: boolean;
}
const Feed = ({ data, isFeedUi }: Props) => {
    if (isFeedUi) {
        return <ShortFeedTheme data={data} />;
    }
    if (!isFeedUi) {
        return <LongFeedTheme data={data} />;
    }
};
export default Feed;
