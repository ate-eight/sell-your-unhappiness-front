import { SVGAttributes } from 'react';

import BackIcon from './BackIcon';
import MenuIcon from './MenuIcon';

export const IconList = {
    'i-back': BackIcon,
    'i-menu': MenuIcon,
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
