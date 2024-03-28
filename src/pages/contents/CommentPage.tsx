import { Suspense } from 'react';

import Loading from '@/components/common/loading/Loading';
import Comment from '@/components/features/contents/comment/comment';

const CommentPage = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Comment />
            </Suspense>
        </>
    );
};

export default CommentPage;
