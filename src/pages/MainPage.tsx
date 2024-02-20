import { useNavigate } from 'react-router-dom';

import CircleButton from '@/components/CircleButton/CircleButton';
import FeedContainer from '@/components/feedcontainer/FeedContainer';
import Nav from '@/components/navigation/Nav';

const MainPage = () => {
    const navigate = useNavigate();

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
                onUrl={function iu() {}}
            />
            {/* 피드 리스트 모아보기  */}
            <FeedContainer />
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
