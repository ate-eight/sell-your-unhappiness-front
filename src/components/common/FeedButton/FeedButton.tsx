import Icon, { IconNames } from '@/components/common/icon/Icon';
import CaptionTag from '@/components/common/text/CaptionTag';
import * as S1 from '@/components/feed/style';

interface Props {
    icon: string;
    color: string;
    count: string;
}
const FeedButton = (props: Props) => {
    const { icon, color, count } = props;
    return (
        <S1.FeedButton>
            <Icon name={icon as IconNames} color={color} />
            <CaptionTag text={count.toString()} as='M' color={color} />
        </S1.FeedButton>
    );
};
export default FeedButton;
