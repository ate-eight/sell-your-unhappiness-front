import Button from '@common/Button/Button';
import { memo, useEffect, useRef } from 'react';

import theme from '@/styles/theme';

import { LnbType } from '../feedcontainer/FeedContainer';
import * as S from './style';
interface Props {
    handleBut: (type: LnbType) => () => void;
    isClick: LnbType;
    LnbMenu: Array<{ name: string; type: LnbType }>;
}
const Lnb = memo(({ handleBut, isClick, LnbMenu }: Props) => {
    const isDown = useRef<boolean>(false);
    const startX = useRef<number>(0);
    const scrollLeftValue = useRef<number>(0);

    useEffect(() => {
        const slider = document.querySelector('#slider') as HTMLElement;
        slider.addEventListener('mousedown', (e: MouseEvent) => {
            isDown.current = true;
            startX.current = e.pageX - slider.offsetLeft;
            scrollLeftValue.current = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown.current = false;
        });

        slider.addEventListener('mouseup', () => {
            isDown.current = false;
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown.current) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX.current) * 0.002;
            slider.scrollLeft = scrollLeftValue.current - walk;
        });
    }, []);

    return (
        <S.LnbContainer>
            <S.ButWrapper id='slider'>
                {LnbMenu.map((menu) => (
                    <Button
                        key={menu.type}
                        color={isClick === menu.type ? 'primary' : 'secondary'}
                        handleOnClick={handleBut(menu.type as LnbType)}
                        label={menu.name}
                        styleProps={{
                            width: '61px',
                            height: '34px',
                            padding: '8px 18px',
                            fontSize: '14px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border:
                                isClick === menu.type ? '' : `1px solid ${theme.color.gray[300]}`,
                        }}
                    />
                ))}
            </S.ButWrapper>
        </S.LnbContainer>
    );
});
Lnb.displayName = 'Lnb';
export default Lnb;
