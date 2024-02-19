import { useNavigate } from 'react-router-dom';

import ContentTag from '@/components/common/text/ContentTag';
import Heading from '@/components/common/text/Heading';

import * as S from './style';

const SignIn = () => {
    const navigate = useNavigate();

    /**
     * Google Login Logic
     */
    const googleLogin = () => {
        alert('google Login');
        navigate('/main');
    };

    return (
        <S.Container>
            <S.Wrapper>
                <S.LogoImageWrapper>
                    <img src='https://via.placeholder.com/236x236' alt='logo' />
                </S.LogoImageWrapper>
                <S.InfoBox>
                    <Heading text='Sell Your Unhappiness' as='h2' />
                    <ContentTag
                        text='이곳에 블행이나 아쉬운 마음을 털어놓고 위안을 받으세요!'
                        as='M'
                    />
                </S.InfoBox>
                <S.GoogleButton onClick={googleLogin}>구글로 로그인</S.GoogleButton>
            </S.Wrapper>
        </S.Container>
    );
};

export default SignIn;
