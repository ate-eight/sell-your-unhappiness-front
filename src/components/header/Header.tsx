import { LinkProps } from 'react-router-dom';

import Icon from '../icon/Icon';
import ContentTag from '../text/ContentTag';
import SubTitle from '../text/SubTitle';
import * as S from './style';
interface Props {
    type: 'Navigation' | 'Location' | 'Header';
    logoUrl?: string;
    LinkList?: LinkProps[];
    location?: string;
    onRegister: () => void;
    onBack: () => void;
}
const Header = ({ type, logoUrl, location, onRegister, onBack }: Props) => {
    if (type === 'Header') {
        return (
            <S.Header type='Header'>
                <S.Logo>
                    {logoUrl ? (
                        <img src={logoUrl} alt='logo' />
                    ) : (
                        <SubTitle text='로고' lan='ENG' color='#fff' />
                    )}
                </S.Logo>
                <S.ButContainer>
                    <S.Button>
                        <Icon name='i-ball' color='#fff' />
                    </S.Button>
                    <S.Button>
                        <Icon name='i-user' color='#fff' />
                    </S.Button>
                    <S.Button>
                        <ContentTag text='등록' color='#fff' as='M' />
                    </S.Button>
                </S.ButContainer>
            </S.Header>
        );
    }
    if (type === 'Navigation') {
        return (
            <S.Header type='Navigation'>
                <SubTitle text={location as string} lan='ENG' color='#fff' />
            </S.Header>
        );
    }
    if (type === 'Location') {
        return (
            <S.Header type='Location'>
                <S.ButContainer>
                    <S.Button onClick={onBack}>
                        <ContentTag text='취소' color='#fff' as='M' />
                    </S.Button>
                    <S.Button>
                        <Icon name='i-back' color='#fff' />
                    </S.Button>
                    <S.Button>
                        <Icon name='i-home' color='#fff' />
                    </S.Button>
                </S.ButContainer>
                <SubTitle text={location as string} lan='ENG' color='#fff' />
                <S.ButContainer>
                    <S.Button>
                        <Icon name='i-user' color='#fff' />
                    </S.Button>
                    <S.Button onClick={onRegister}>
                        <ContentTag text='등록' color='#fff' as='M' />
                    </S.Button>
                </S.ButContainer>
            </S.Header>
        );
    }
};
export default Header;
