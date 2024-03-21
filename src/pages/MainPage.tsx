import CircleButton from '@components/common/CircleButton/CircleButton';
import Nav from '@components/common/navigation/Nav';
import FeedContainer from '@components/feedcontainer/FeedContainer';
import { Suspense, useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Loading from '@/components/common/loading/Loading';

const MainPage = () => {
    const navigate = useNavigate();
    const [isFeedUi, setIsFeedUi] = useState(false);
    const saveIsFeedUi = useMemo(() => isFeedUi, [isFeedUi]);
    const handleFeedUi = useCallback(() => setIsFeedUi((prev) => !prev), [isFeedUi]);

    const handleMoveWrite = useCallback(() => navigate('/contents/create'), []);

    return (
        <>
            <Nav onHandleToggle={handleFeedUi} />
            {/* 피드 리스트 모아보기  */}
            <Suspense fallback={<Loading />}>
                <FeedContainer isFeedUi={saveIsFeedUi} />
            </Suspense>
            <CircleButton
                iconName='i-edit-fill'
                iconColor='#fff'
                size='lg'
                handleOnClick={handleMoveWrite}
                styleProps={{
                    position: 'fixed',
                    bottom: '3%',
                    right: '3%',
                }}
            />
        </>
    );
};

export default MainPage;
