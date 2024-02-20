import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CircleButton from '@/components/CircleButton/CircleButton';
import FeedContainer from '@/components/feedcontainer/FeedContainer';
import Nav from '@/components/navigation/Nav';

const MainPage = () => {
    const navigate = useNavigate();
    const [isFeedUi, setIsFeedUi] = useState(false);
    const handleFeedUi = useCallback(() => setIsFeedUi((prev) => !prev), [isFeedUi]);

    return (
        <>
            <Nav
                LinkList={[
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
                ]}
                onHandleToggle={handleFeedUi}
            />
            {/* 피드 리스트 모아보기  */}
            <FeedContainer isFeedUi={isFeedUi} />
            <CircleButton
                iconName={'i-edit-fill'}
                iconColor='#fff'
                size='lg'
                handleOnClick={() => navigate('/contents/create')}
            />
        </>
    );
};

export default MainPage;
