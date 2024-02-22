import CircleButton from '@components/common/CircleButton/CircleButton';
import Nav from '@components/common/navigation/Nav';
import FeedContainer from '@components/feedcontainer/FeedContainer';
import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
            <FeedContainer isFeedUi={saveIsFeedUi} />
            <CircleButton
                iconName='i-edit-fill'
                iconColor='#fff'
                size='lg'
                handleOnClick={handleMoveWrite}
            />
        </>
    );
};

export default MainPage;
