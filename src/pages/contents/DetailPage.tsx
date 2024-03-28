import { Suspense } from 'react';

import Loading from '@/components/common/loading/Loading';
import Detail from '@/components/features/contents/detail/detail';

const DetailPage = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Detail />
            </Suspense>
        </>
    );
};

export default DetailPage;
