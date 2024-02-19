import { useState } from 'react';

import theme from '@/styles/theme';

import SubTitle from '../text/SubTitle';
import * as S from './style';
interface Props {
    Buttons: ButtonProps[];
}
interface ButtonProps {
    id: number;
    title: string;
}
const Tab = ({ Buttons }: Props) => {
    const [isActive, setIsActive] = useState<number>(0);
    const onHandleActive = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const elem = e.target as HTMLElement;
        setIsActive(Number(elem.id ? elem.id : elem.parentElement?.id));
    };

    return (
        <S.TabContainer>
            {Buttons.map((v) => (
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
