import { useInfiniteQuery } from '@tanstack/react-query';
import { memo, useCallback, useMemo, useState, useTransition } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { getBoards } from '@/api/boards';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import boardTypeSelector from '@/store/selector/boardSelector';

import Loading from '../common/loading/Loading';
import Feed from '../feed/Feed';
import Lnb from '../lnb/Lnb';
import EmptyFeedList from './EmptyFeedList';
import * as S from './style';

export interface ILnbObj {
    name: string;
    type: number;
}
export interface Props {
    isFeedUi: boolean;
}
const FeedContainer = memo(({ isFeedUi }: Props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [, startTransition] = useTransition();

    const boardType = useRecoilValue(boardTypeSelector);

    const { search } = useLocation();

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

    const fetchBoards = async ({ pageParam }) => {
        const res = await getBoards({
            type: isClick,
            page: pageParam,
            status: search.includes('sold') ? '품절' : '',
        });
        return res;
    };

    const { createObserver, disconnectObserver } = useIntersectionObserver(() => fetchNextPage());

    const { data, status, fetchNextPage } = useInfiniteQuery({
        queryKey: ['feedArr', isClick, search],
        queryFn: fetchBoards,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if (lastPage.pageValue.totalPage === 0) {
                disconnectObserver();
                return undefined;
            }
            if (lastPage.pageValue.totalPage === allPages.length) {
                disconnectObserver();
                return undefined;
            }

            return lastPageParam + 1;
        },
    });

    const feedListLen: number = data?.pages[0].pageValue.totalElements || 0;

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

            {status === 'pending' ? (
                <S.FeedContents>
                    <Loading />
                </S.FeedContents>
            ) : status === 'error' ? (
                <S.FeedContents>에러가 발생하였습니다..</S.FeedContents>
            ) : (
                <>
                    {feedListLen === 0 && <EmptyFeedList />}
                    {data?.pages.map((group) =>
                        group.contents?.map((data) => (
                            <Feed key={data.id} data={data} isFeedUi={isFeedUi} />
                        )),
                    )}
                    <div ref={createObserver} id='target'></div>
                </>
            )}
        </S.FeedContainer>
    );
});
FeedContainer.displayName = 'FeedContainer';
export default FeedContainer;
