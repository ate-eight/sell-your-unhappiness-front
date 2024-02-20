import { Path, useLocation } from 'react-router-dom';

import Icon from '../icon/Icon';
import Heading from '../text/Heading';
import * as S from './style';

interface Props {
    LinkList?: Array<{ to: Partial<Path>; loc: string }>;
    onHandleToggle: () => void;
}
const Nav = ({ LinkList, onHandleToggle }: Props) => {
    const { pathname } = useLocation();
    return (
        <S.LocationContainer>
            <S.LinkContainer>
                {LinkList?.map((list) => {
                    const { to, loc } = list;
                    return (
                        <S.HeaderLink key={loc} to={to.pathname as string}>
                            <Heading
                                as='h2'
                                text={loc}
                                color={pathname === to.pathname ? '#fff' : '#4E4994'}
                            />
                        </S.HeaderLink>
                    );
                })}
            </S.LinkContainer>
            {/* 링크 */}
            <S.Button onClick={onHandleToggle}>
                <Icon name='i-list' color='#fff' />
            </S.Button>
        </S.LocationContainer>
    );
};
export default Nav;
