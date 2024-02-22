import Button from '@components/common/Button/Button';
import { memo } from 'react';

import theme from '@/styles/theme';

import { LnbType } from '../feedcontainer/FeedContainer';
import * as S from './style';
interface Props {
    handleBut: (type: LnbType) => () => void;
    isClick: LnbType;
    LnbMenu: Array<{ name: string; type: LnbType }>;
}
const Lnb = memo(({ handleBut, isClick, LnbMenu }: Props) => {
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
