import { memo } from 'react';

import Icon from '../icon/Icon';
import LinkNav from './LinkNav';
import * as S from './style';

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
