import { useNavigate } from 'react-router-dom';

import CircleButton from '@/components/CircleButton/CircleButton';
import Lnb from '@/components/lnb/Lnb';
import Nav from '@/components/navigation/Nav';

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div>
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
            <Lnb />
            <CircleButton
                iconName={'i-edit-fill'}
                iconColor='#fff'
                size='lg'
                handleOnClick={() => navigate('/contents/create')}
            />
        </div>
    );
};

export default MainPage;
