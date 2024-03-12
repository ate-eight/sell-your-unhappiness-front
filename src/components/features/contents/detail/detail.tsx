import SubTitle from '@components/common/text/SubTitle';
import { useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '@/components/common/Button/Button';
import Divider from '@/components/common/divider/divider';
import Input from '@/components/common/Input/Input';
import ContentTag from '@/components/common/text/ContentTag';
import CommentContainer from '@/components/features/contents/detail/commentContainer';
import TitleContainer from '@/components/features/contents/detail/titleContainer';

import * as S from '../style';
export interface IButtonData {
    label: string;
    color: 'primary' | 'secondary';
}
const ContentContainer = () => {
    const { id } = useParams();
    const [inputValue, setinputValue] = useState('');
    const handleValueChange = useCallback((value: string) => {
        setinputValue(value);
    }, []);

    const navigate = useNavigate();
    const handleMoveComment = useCallback(() => navigate(`/contents/${id}/comment`), []);

    const content =
        '이것은 글의 본문 내용입니다. 이것은 글의 본문 내용입니다. 이것은 글의 본문 내용입니다. 이것은 글의 본문 내용입니다. 이것은 글의 본문 내용입니다.  이것은 글의 본문 내용입니다. ';
    const count = '0';

    const buttonData: Array<IButtonData> = [
        { label: 'Skip', color: 'secondary' },
        { label: 'Buy', color: 'primary' },
    ];
    return (
        <S.Wrapper>
            <S.Container>
                {/* 타이틀 영역 */}
                <TitleContainer />
                <Divider size={6} />
                {/* 글 영역 */}
                <S.ContentContainer>
                    <ContentTag as='M' text={content} />
                </S.ContentContainer>
                <Divider color={300} />
                {/* 댓글 영역 */}
                <S.CommentWrapper>
                    <SubTitle lan='ENG' text={`댓글 ${count}`} />
                    <CommentContainer />
                    <div onClick={handleMoveComment}>
                        <Input
                            placeholder={'댓글을 남겨보세요.'}
                            as={'Default'}
                            value={inputValue}
                            handleOnChange={handleValueChange}
                        />
                    </div>
                </S.CommentWrapper>
                <Divider size={6} />
            </S.Container>
            {/* 버튼 영역 */}
            <S.ButtonWrapper>
                {buttonData.map((b, index) => (
                    <Button
                        key={index}
                        label={b.label}
                        color={b.color as 'secondary' | 'primary'}
                        styleProps={{
                            height: '48px',
                            fontSize: '18px',
                        }}
                    />
                ))}
            </S.ButtonWrapper>
        </S.Wrapper>
    );
};

export default ContentContainer;
