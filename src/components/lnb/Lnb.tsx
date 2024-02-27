import Button from '@components/common/Button/Button';
import { memo } from 'react';

import theme from '@/styles/theme';

import { TLnb } from '../feedcontainer/FeedContainer';
import * as S from './style';
interface Props {
    handleClick: (type: TLnb) => () => void;
    isClick: TLnb;
    LnbMenu: Array<{ name: string; type: TLnb }>;
}
const Lnb = memo(({ handleClick, isClick, LnbMenu }: Props) => {
    return (
        <S.LnbContainer>
            <S.ButtonWrapper id='slider'>
                {LnbMenu.map((menu) => (
                    <Button
                        key={menu.type}
                        color={isClick === menu.type ? 'primary' : 'secondary'}
                        handleOnClick={handleClick(menu.type as TLnb)}
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
            </S.ButtonWrapper>
        </S.LnbContainer>
    );
});
Lnb.displayName = 'Lnb';
export default Lnb;
