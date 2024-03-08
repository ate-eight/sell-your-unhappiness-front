import { useQuery } from '@tanstack/react-query';
import { memo, useCallback, useMemo, useState, useTransition } from 'react';
import { useRecoilValue } from 'recoil';

import { getBoards } from '@/api/boards';
import boardTypeSelector from '@/store/selector/boardSelector';

import Feed from '../feed/Feed';
import Lnb from '../lnb/Lnb';
import * as S from './style';

export interface ILnbObj {
    name: string;
    type: number;
}
export interface Props {
    isFeedUi: boolean;
}
const FeedContainer = memo(({ isFeedUi }: Props) => {
    const [isPending, startTransition] = useTransition();
    const boardType = useRecoilValue(boardTypeSelector);

    const LnbMenu: Array<ILnbObj> = useMemo(
        () => boardType.map((board, i) => ({ type: i, name: board })),
        [boardType],
    );
    const initialState = () => LnbMenu[0].name;
    const [isClick, setIsClick] = useState(initialState);

    const saveIsClick = useMemo(() => isClick, [isClick]);

    const handleClick = useCallback(
        (type: string) => () => {
            if (isClick !== type) startTransition(() => setIsClick(type));
        },
        [isClick],
    );

    console.log('saveIsClick', saveIsClick);

    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ['feedArr', isClick],
        queryFn: () => getBoards({ type: isClick, page: 1 }),
    });

    // const feedArr: IFeed[] = [
    //     {
    //         index: 0,
    //         title: '제목을 쓰는 공간입니다.',
    //         heart: 7,
    //         comment: 4,
    //         content:
    //             '이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은',
    //         date: '2024.01.01. 12:00',
    //     },
    //     {
    //         index: 1,
    //         title: '제목을 쓰는 공간입니다.',
    //         heart: 7,
    //         comment: 4,
    //         content:
    //             '이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은',
    //         date: '2024.01.01. 12:00',
    //     },
    // ];

    return (
        <S.FeedContainer>
            <Lnb handleClick={handleClick} isClick={saveIsClick as string} LnbMenu={LnbMenu} />
            {isPending && isLoading && <div></div>}
            {isSuccess &&
                data.contents?.map((data) => (
                    <Feed key={data.id} data={data} isFeedUi={isFeedUi} />
                ))}
        </S.FeedContainer>
    );
});
FeedContainer.displayName = 'FeedContainer';
export default FeedContainer;
