import { useNavigate } from 'react-router-dom';

import Icon from '../common/icon/Icon';
import SubTitle from '../common/text/SubTitle';
import * as S from './style';
const Locator = () => {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    return (
        <S.LocatorContainer>
            <S.LocatorTitle>
                <SubTitle text='내 활동' lan='KR' />
            </S.LocatorTitle>
            <S.LocatorCloseButton onClick={handleBack}>
                <Icon name='i-close' />
            </S.LocatorCloseButton>
        </S.LocatorContainer>
    );
};
export default Locator;
