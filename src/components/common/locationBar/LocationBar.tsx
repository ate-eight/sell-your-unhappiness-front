import Icon from '../icon/Icon';
import ContentTag from '../text/ContentTag';
import SubTitle from '../text/SubTitle';
import * as S from './style';

interface Props {
    location?: string;
    onRegister: () => void;
    onBack: () => void;
    as?: string;
}

const Header = (props: Props) => {
    const { location, onRegister, onBack, as } = props;
    if (as === 'all') {
        return (
            <S.LocationContainer width={'390px'}>
                <S.ButtonContainer>
                    {/* 뒤로 가기 */}
                    <S.Button onClick={onBack}>
                        <ContentTag text='취소' color='#fff' as='M' />
                    </S.Button>
                    <S.Button cursor={'unset'}>
                        <Icon name='i-back' color='#fff' />
                    </S.Button>
                    <S.HeaderLink to='/'>
                        <Icon name='i-home' color='#fff' />
                    </S.HeaderLink>
                </S.ButtonContainer>
                <SubTitle text={location as string} lan='ENG' color='#fff' />
                <S.ButtonContainer>
                    <S.HeaderLink to='/user'>
                        <Icon name='i-user' color='#fff' />
                    </S.HeaderLink>
                    {/* 등록 버튼 */}
                    <S.Button onClick={onRegister}>
                        <ContentTag text='등록' color='#fff' as='M' />
                    </S.Button>
                </S.ButtonContainer>
            </S.LocationContainer>
        );
    } else if (as === 'back') {
        return (
            <S.LocationContainer width={'100%'}>
                {/* 뒤로 가기 */}
                <S.Button onClick={onBack}>
                    <Icon name='i-back' color='#fff' />
                </S.Button>
                <SubTitle text={location as string} lan='ENG' color='#fff' />
                <S.HeaderLink to='/'>
                    <Icon name='i-home' color='#fff' />
                </S.HeaderLink>
            </S.LocationContainer>
        );
    } else if (as === 'subtitle') {
        return (
            <S.LocationContainer width={'100%'} justifyContent={'center'}>
                <SubTitle text={location as string} lan='ENG' color='#fff' />
            </S.LocationContainer>
        );
    }
};
export default Header;
