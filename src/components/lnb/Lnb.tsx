import Button from '@components/common/Button/Button';
import { memo } from 'react';

import theme from '@/styles/theme';

import * as S from './style';
interface Props {
    handleClick: (type: string) => () => void;
    isClick: string;
    LnbMenu: Array<{ name: string; type: number }>;
}
const Lnb = memo(({ handleClick, isClick, LnbMenu }: Props) => {
    return (
        <S.LnbContainer>
            <S.ButtonWrapper id='slider'>
                {LnbMenu.map((menu) => {
                    const { type, name } = menu;
                    return (
                        <Button
                            key={type}
                            color={isClick === name ? 'primary' : 'secondary'}
                            handleOnClick={handleClick(name)}
                            label={name}
                            styleProps={{
                                width: '61px',
                                height: '34px',
                                padding: '8px 18px',
                                fontSize: '14px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border:
                                    isClick === name ? '' : `1px solid ${theme.color.gray[300]}`,
                            }}
                        />
                    );
                })}
            </S.ButtonWrapper>
        </S.LnbContainer>
    );
});
Lnb.displayName = 'Lnb';
export default Lnb;
