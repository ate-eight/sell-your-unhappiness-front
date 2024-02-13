import { useNavigate } from 'react-router-dom';

import CircleButton from '@/components/CircleButton/CircleButton';

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            Main
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
