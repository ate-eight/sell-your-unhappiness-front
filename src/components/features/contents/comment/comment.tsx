import SubTitle from '@components/common/text/SubTitle';
import { useCallback, useState } from 'react';

import { fetchData } from '@/api';
import Divider from '@/components/common/divider/divider';
import Input from '@/components/common/Input/Input';
import CommentContainer from '@/components/features/contents/detail/commentContainer';

import * as S from '../style';

interface ICommentAddResponse {
    message: string;
}

export interface IButtonData {
    label: string;
    color: 'primary' | 'secondary';
}
const ContentContainer = () => {
    const [inputValue, setinputValue] = useState('');
    const handleValueChange = useCallback((value: string) => {
        setinputValue(value);
    }, []);

    const count = '0';

    /**
     * react-query mutation으로 query-key update
     */
    const handleCommentSubmit = async () => {
        alert('댓글 저장');

        if (!inputValue) return;

        const response = await fetchData.post<ICommentAddResponse>(
            '/v1/board-comment',
            JSON.stringify({
                // parentId: 0,
                boardId: 1,
                content: inputValue,
            }),
        );

        if (response) {
            const { data, common } = response.data;

            if (common.success) {
                console.log(data);
            } else {
                console.error(common.message);
            }
        }
    };

    return (
        <S.Wrapper>
            <S.Container>
                {/* 댓글 영역 */}
                <S.CommentWrapper detail={true}>
                    <SubTitle lan='ENG' text={`댓글 ${count}`} />
                    <Divider size={6} />
                    <CommentContainer />
                    <S.InputArea>
                        <Divider color={300} />
                        <Input
                            placeholder={'댓글을 남겨보세요.'}
                            as={'Comment'}
                            value={inputValue}
                            handleOnChange={handleValueChange}
                            handleOnClick={handleCommentSubmit}
                        />
                    </S.InputArea>
                </S.CommentWrapper>
            </S.Container>
        </S.Wrapper>
    );
};

export default ContentContainer;
