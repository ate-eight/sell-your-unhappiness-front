import { useCallback, useState } from 'react';

import Button from '../Button/Button';
import * as S from './style';
type LnbType = 'all' | 'company' | 'school' | 'friend' | 'family';
const Lnb = () => {
    const LnbMenu = [
        { name: '전체', type: 'all' },
        { name: '회사', type: 'company' },
        { name: '학교', type: 'school' },
        { name: '친구', type: 'friend' },
        { name: '가족', type: 'family' },
    ];
    const [isClick, setIsClick] = useState(LnbMenu[0].type);
    const handleBut = useCallback(
        (type: LnbType) => () => {
            if (isClick !== type) setIsClick(type);
        },
        [isClick],
    );

    return (
        <S.LnbContainer>
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
                    }}
                />
            ))}
        </S.LnbContainer>
    );
};
export default Lnb;
