import * as S from './style';

const Loading = () => {
    return (
        <S.LoadingContainer>
            <S.SpinerImage src='/loading-spiner.gif' alt='로딩 스피너' />
        </S.LoadingContainer>
    );
};

export default Loading;
