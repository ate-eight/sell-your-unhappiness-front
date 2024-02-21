import Icon from '../icon/Icon';
import * as S from './style';

const Header = () => {
    return (
        <S.Header>
            <h1>로고</h1>
            <S.TabBox>
                <S.Tab to={'/alert'}>
                    <Icon name='i-ball' color='#fff' />
                </S.Tab>
                <S.Tab to={'/mypage'}>
                    <Icon name='i-user' color='#fff' />
                </S.Tab>
            </S.TabBox>
        </S.Header>
    );
};

export default Header;
