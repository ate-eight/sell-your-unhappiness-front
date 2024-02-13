import { SVGAttributes } from 'react';

import ArrowCircleUpIcon from './ArrowCircleUpIcon';
import BackIcon from './BackIcon';
import BallIcon from './BallIcon';
import CloseIcon from './CloseIcon';
import EditFillIcon from './EditFillIcon';
import EditIcon from './EditIcon';
import FeedIcon from './FeedIcon';
import HeartIcon from './HeartIcon';
import HomeIcon from './HomeIcon';
import ListIcon from './ListIcon';
import MenuIcon from './MenuIcon';
import MessageIcon from './MessageIcon';
import ReplyIcon from './ReplyIcon';
import ThumbUpIcon from './ThumbUpIcon';
import UserIcon from './UserIcon';

export const IconList = {
    'i-back': BackIcon,
    'i-menu': MenuIcon,
    'i-close': CloseIcon,
    'i-user': UserIcon,
    'i-home': HomeIcon,
    'i-edit': EditIcon,
    'i-edit-fill': EditFillIcon,
    'i-ball': BallIcon,
    'i-feed': FeedIcon,
    'i-list': ListIcon,
    'i-heart': HeartIcon,
    'i-message': MessageIcon,
    'i-reply': ReplyIcon,
    'i-thumb-up': ThumbUpIcon,
    'i-arrow-circle-up': ArrowCircleUpIcon,
} as const;

export type IconNames = keyof typeof IconList;

interface Props extends SVGAttributes<SVGElement> {
    name: IconNames;
    size?: number;
    color?: string;
}

const Icon = (props: Props) => {
    const { name, ...rest } = props;

    const IconComponent = IconList[name];

    return <IconComponent {...rest} />;
};

export default Icon;
