import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import Heading from '../text/Heading';
import * as S from './style';
const LinkNav = () => {
    const { pathname } = useLocation();

    const LinkList = useMemo(
        () => [
            {
                loc: 'Home',
                to: {
                    pathname: '/main',
                },
            },
            {
                loc: 'New',
                to: {
                    pathname: '/contents/create',
                },
            },
            {
                loc: 'Sold Out',
                to: {
                    pathname: '/Soldout',
                },
            },
        ],
        [],
    );
    return (
        <S.LinkContainer>
            {LinkList.map((link) => (
                <S.HeaderLink key={link.loc} to={link.to.pathname}>
                    <Heading
                        as='h2'
                        text={link.loc}
                        color={link.to.pathname === pathname ? '#fff' : '#4E4994'}
                    />
                </S.HeaderLink>
            ))}
        </S.LinkContainer>
    );
};
export default LinkNav;
