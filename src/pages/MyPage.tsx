import { useMemo } from 'react';

import Tab, { IButton } from '@/components/common/tab/Tab';
import Locator from '@/components/locator/Locator';
import MyFeedContainer from '@/components/myfeedcontainer/MyFeedContainer';

const MyPage = () => {
    const tabButtons: IButton[] = useMemo(
        () => [
            {
                id: 0,
                title: '내가 작성한 글',
            },
            {
                id: 1,
                title: '내가 BUY한 글',
            },
        ],
        [],
    );
    return (
        <>
            <Locator loc='내 활동' />
            <Tab buttonInfo={tabButtons} />
            <MyFeedContainer />
        </>
    );
};

export default MyPage;
