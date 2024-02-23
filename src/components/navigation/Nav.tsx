import Icon from '@common/icon/Icon';
import LinkNav from '@common/navigation/LinkNav';
import * as S from '@common/navigation/style';
import { memo } from 'react';

interface Props {
    onHandleToggle: () => void;
}
const Nav = memo(({ onHandleToggle }: Props) => {
    return (
        <S.LocationContainer>
            <LinkNav />
            {/* 링크 */}
            <S.Button onClick={onHandleToggle}>
                <Icon name='i-list' color='#fff' />
            </S.Button>
        </S.LocationContainer>
    );
});
Nav.displayName = 'Nav';
export default Nav;
