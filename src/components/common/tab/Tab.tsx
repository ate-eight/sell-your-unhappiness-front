import { useState } from 'react';

import theme from '@/styles/theme';

import SubTitle from '../text/SubTitle';
import * as S from './style';
interface Props {
    buttonInfo: IButton[];
}
export interface IButton {
    id: number;
    title: string;
}
const Tab = ({ buttonInfo }: Props) => {
    const [isActive, setIsActive] = useState<number>(0);
    const onHandleActive = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const elem = e.target as HTMLElement;
        setIsActive(Number(elem.id ? elem.id : elem.parentElement?.id));
    };

    return (
        <S.TabContainer>
            {buttonInfo.map((v) => (
                <S.TabItem
                    isActive={v.id === isActive ? true : false}
                    onClick={onHandleActive}
                    id={v.id.toString()}
                    key={v.id}
                >
                    <SubTitle
                        text={v.title}
                        color={v.id === isActive ? theme.color.gray[800] : theme.color.gray[400]}
                        lan='KR'
                    />
                </S.TabItem>
            ))}
        </S.TabContainer>
    );
};

export default Tab;
