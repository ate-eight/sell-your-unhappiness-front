import Button from '../Button/Button';
import * as S from './style';
const Lnb = () => {
    const LnbMenu = [
        { name: '전체', type: 'all' },
        { name: '회사', type: 'company' },
        { name: '학교', type: 'school' },
        { name: '친구', type: 'friend' },
        { name: '가족', type: 'family' },
    ];
    return (
        <S.LnbContainer>
            {LnbMenu.map((menu) => (
                <Button
                    key={menu.type}
                    color='secondary'
                    handleOnClick={function iu() {}}
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
