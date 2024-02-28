import SubTitle from '@components/common/text/SubTitle';
import { useCallback, useState } from 'react';

import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import ContentTag from '@/components/common/text/ContentTag';
import CommentContainer from '@/components/features/contents/detail/commentContainer';
import TitleContainer from '@/components/features/contents/detail/titleContainer';

import * as S from '../style';
export interface ButtonData {
    label: string;
    color: 'primary' | 'secondary';
}
const ContentContainer = () => {
    const [inputValue, setinputValue] = useState('');
    const handleValueChange = useCallback((value: string) => {
        setinputValue(value);
    }, []);

    const content =
        '이것은 글의 본문 내용입니다. 이것은 글의 본문 내용입니다. 이것은 글의 본문 내용입니다. 이것은 글의 본문 내용입니다. 이것은 글의 본문 내용입니다.  이것은 글의 본문 내용입니다. ';
    const count = '0';

    const buttonData: Array<ButtonData> = [
        { label: 'Skip', color: 'secondary' },
        { label: 'Buy', color: 'primary' },
    ];
    return (
        <S.Wrapper>
            <S.Container>
                {/* 타이틀 영역 */}
                <TitleContainer />
                {/* 글 영역 */}
                <S.ContentContainer>
                    <ContentTag as='M' text={content} />
                </S.ContentContainer>
                {/* 댓글 영역 */}
                <S.CommentWrapper>
                    <SubTitle lan='ENG' text={`댓글 ${count}`} />
                    <CommentContainer />
                    <Input
                        placeholder={'댓글을 남겨보세요.'}
                        as={'Comment'}
                        value={inputValue}
                        handleOnChange={handleValueChange}
                    />
                </S.CommentWrapper>
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
