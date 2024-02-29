import ContentTag from '@/components/common/text/ContentTag';
import Heading from '@/components/common/text/Heading';
import useSignIn from '@/hooks/useSignIn';

import * as S from './style';

const SignIn = () => {
    const { googleLogin } = useSignIn();

    return (
        <S.Container>
            <S.Wrapper>
                <S.LogoImageWrapper>
                    <img src='https://via.placeholder.com/236x236' alt='로고' />
                </S.LogoImageWrapper>
                <S.InfoBox>
                    <Heading text='Sell Your Unhappiness' as='h2' />
                    <ContentTag
                        text='이곳에 불행이나 아쉬운 마음을 털어놓고 위안을 받으세요!'
                        as='M'
                    />
                </S.InfoBox>
                <S.GoogleButton onClick={googleLogin}>
                    <img src='i-google.svg' alt='구글 로고' />
                    구글로 로그인
                </S.GoogleButton>
            </S.Wrapper>
        </S.Container>
    );
};

export default SignIn;
