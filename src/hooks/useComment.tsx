import { useCallback, useEffect, useState } from 'react';

import { ICommentAdd, useCommentAdd, useCommentById } from '@/api/comment';

type TBoardId = string | undefined;

const useComment = (id: TBoardId) => {
    const { data: commentsData } = useCommentById(Number(id));
    const [inputValue, setinputValue] = useState('');
    const { mutate: addComment, isError, isSuccess } = useCommentAdd();

    const handleValueChange = useCallback((value: string) => {
        setinputValue(value);
    }, []);

    /**
     * react-query mutation으로 query-key update
     */
    const handleCommentSubmit = async () => {
        const obj: ICommentAdd = {
            boardId: Number(id),
            content: inputValue,
        };

        addComment(obj);
    };

    /**
     * mutation이 에러없이 성공했을 경우 input 초기화
     */
    useEffect(() => {
        if (!isError && isSuccess) {
            setinputValue('');
        }
    }, [isError, isSuccess]);

    return {
        commentsData,
        inputValue,
        handleValueChange,
        handleCommentSubmit,
    };
};

export default useComment;
