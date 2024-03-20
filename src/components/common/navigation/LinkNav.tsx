import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import Heading from '../text/Heading';
import * as S from './style';
const LinkNav = () => {
    const queryArr = [
        { name: 'Home', sortType: 'all' },
        { name: 'New', sortType: 'new' },
        {
            name: 'Sold Out',
            sortType: 'soldout',
        },
    ];

    const [searchParams, setSearchParams] = useSearchParams();
    const { search } = useLocation();

    useEffect(() => {
        const settingQuerystring = () => {
            if (!searchParams.get('sort')) {
                searchParams.set('sort', 'all');
                setSearchParams(searchParams);
            }
        };
        settingQuerystring();
    }, []);

    const handleMoveSearch = (type: string) => () => {
        searchParams.set('sort', type);
        setSearchParams(searchParams);
    };

    return (
        <S.LinkContainer id='link'>
            {queryArr.map((query) => (
                <S.HeaderLink key={query.name} onClick={handleMoveSearch(query.sortType)}>
                    <Heading
                        as='h2'
                        text={query.name}
                        color={search.includes(query.sortType) ? '#fff' : '#4E4994'}
                    />
                </S.HeaderLink>
            ))}
        </S.LinkContainer>
    );
};
export default LinkNav;
