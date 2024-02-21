import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CircleButton from '@/components/CircleButton/CircleButton';
import FeedContainer from '@/components/feedcontainer/FeedContainer';
import Nav from '@/components/navigation/Nav';

const MainPage = () => {
    const navigate = useNavigate();
    const [isFeedUi, setIsFeedUi] = useState(false);
    const saveIsFeedUi = useMemo(() => isFeedUi, [isFeedUi]);
    const handleFeedUi = useCallback(() => setIsFeedUi((prev) => !prev), [isFeedUi]);

    const moveWrite = useCallback(() => navigate('/contents/create'), []);

    return (
        <>
            <Nav onHandleToggle={handleFeedUi} />
            {/* 피드 리스트 모아보기  */}
            <FeedContainer isFeedUi={saveIsFeedUi} />
            <CircleButton
                iconName='i-edit-fill'
                iconColor='#fff'
                size='lg'
                handleOnClick={moveWrite}
            />
        </>
    );
};

export default MainPage;
