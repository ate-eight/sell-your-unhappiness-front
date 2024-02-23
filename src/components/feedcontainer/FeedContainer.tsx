import { memo, useCallback, useMemo, useState } from 'react';

import Feed, { IFeed } from '../feed/Feed';
import Lnb from '../lnb/Lnb';
import * as S from './style';
export type TLnb = 'all' | 'company' | 'school' | 'friend' | 'family' | 'etc';
export interface ILnbObj {
    name: string;
    type: TLnb;
}
export interface Props {
    isFeedUi: boolean;
}
const FeedContainer = memo(({ isFeedUi }: Props) => {
    const LnbMenu: Array<ILnbObj> = useMemo(
        () => [
            { name: '전체', type: 'all' },
            { name: '회사', type: 'company' },
            { name: '학교', type: 'school' },
            { name: '친구', type: 'friend' },
            { name: '가족', type: 'family' },
            { name: '기타', type: 'etc' },
        ],
        [],
    );
    const initialState = () => LnbMenu[0].type;
    const [isClick, setIsClick] = useState(initialState);

    const saveIsClick = useMemo(() => isClick, [isClick]);
    const handleClick = useCallback(
        (type: TLnb) => () => {
            if (isClick !== type) setIsClick(type);
        },
        [isClick],
    );

    const feedArr: IFeed[] = [
        {
            index: 0,
            title: '제목을 쓰는 공간입니다.',
            heart: 7,
            comment: 4,
            content:
                '이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은',
            date: '2024.01.01. 12:00',
        },
        {
            index: 1,
            title: '제목을 쓰는 공간입니다.',
            heart: 7,
            comment: 4,
            content:
                '이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은',
            date: '2024.01.01. 12:00',
        },
    ];

    return (
        <S.FeedContainer>
            <Lnb handleClick={handleClick} isClick={saveIsClick as TLnb} LnbMenu={LnbMenu} />
            {feedArr.map((data) => (
                <Feed key={data.index} data={data} isFeedUi={isFeedUi} />
            ))}
        </S.FeedContainer>
    );
});
FeedContainer.displayName = 'FeedContainer';
export default FeedContainer;
