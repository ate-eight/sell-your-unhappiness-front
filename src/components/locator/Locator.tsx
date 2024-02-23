import Icon from '../common/icon/Icon';
import SubTitle from '../common/text/SubTitle';
import * as S from './style';
const Locator = () => {
    return (
        <S.LocatorContainer>
            <S.LocatorTitle>
                <SubTitle text='내 활동' lan='KR' />
            </S.LocatorTitle>
            <S.LocatorCloseButton>
                <Icon name='i-close' />
            </S.LocatorCloseButton>
        </S.LocatorContainer>
    );
};
export default Locator;
