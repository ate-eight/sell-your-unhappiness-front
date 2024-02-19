import { useNavigate } from 'react-router-dom';

import CircleButton from '@/components/CircleButton/CircleButton';
import Feed, { FeedType } from '@/components/feed/Feed';
import Lnb from '@/components/lnb/Lnb';
import Nav from '@/components/navigation/Nav';

const MainPage = () => {
    const navigate = useNavigate();
    const feedArr: FeedType[] = [
        {
            index: 0,
            title: '제목을 쓰는 공간입니다.',
            heart: 7,
            comment: 4,
            content:
                '이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은',
            date: '2024.01.01. 12:00',
        },
        {
            index: 1,
            title: '제목을 쓰는 공간입니다.',
            heart: 7,
            comment: 4,
            content:
                '이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은 내용을 쓰는 공간입니다. 이곳은',
            date: '2024.01.01. 12:00',
        },
    ];

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
            <Lnb />
            {feedArr.map((data) => (
                <Feed key={data.index} data={data} />
            ))}
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
