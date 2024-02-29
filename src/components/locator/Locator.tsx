import { useNavigate } from 'react-router-dom';

import Icon from '../common/icon/Icon';
import SubTitle from '../common/text/SubTitle';
import * as S from './style';
interface Props {
    loc: string;
}
const Locator = ({ loc }: Props) => {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    return (
        <S.LocatorContainer id='loc'>
            <S.LocatorTitle>
                <SubTitle text={loc} lan='KR' />
            </S.LocatorTitle>
            <S.LocatorCloseButton onClick={handleBack} id='back'>
                <Icon name='i-close' />
            </S.LocatorCloseButton>
        </S.LocatorContainer>
    );
};
export default Locator;
