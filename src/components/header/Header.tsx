import { Path, useLocation } from 'react-router-dom';

import Icon from '../icon/Icon';
import ContentTag from '../text/ContentTag';
import SubTitle from '../text/SubTitle';
import * as S from './style';

interface Props {
    type: 'Navigation' | 'Location' | 'Header';
    logoUrl?: string;
    LinkList?: Array<{ to: Path; loc: string }>;
    location?: string;
    onRegister: () => void;
    onBack: () => void;
}
const Header = ({ type, logoUrl, location, onRegister, onBack, LinkList }: Props) => {
    const { pathname } = useLocation();
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
                    {/* 등록 버튼 */}
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
                <S.LinkContainer>
                    {LinkList?.map((list) => {
                        const { to, loc } = list;
                        return (
                            <S.HeaderLink key={loc} to={to.pathname}>
                                <SubTitle
                                    text={loc}
                                    lan='ENG'
                                    color={pathname === to.pathname ? '#fff' : '#4E4994'}
                                />
                            </S.HeaderLink>
                        );
                    })}
                </S.LinkContainer>
                <S.Button>
                    <Icon name='i-list' color='#fff' />
                </S.Button>
            </S.Header>
        );
    }
    if (type === 'Location') {
        return (
            <S.Header type='Location'>
                <S.ButContainer>
                    {/* 뒤로 가기 */}
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
                    {/* 등록 버튼 */}
                    <S.Button onClick={onRegister}>
                        <ContentTag text='등록' color='#fff' as='M' />
                    </S.Button>
                </S.ButContainer>
            </S.Header>
        );
    }
};
export default Header;
