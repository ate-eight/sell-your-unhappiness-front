import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import TextArea from '@/components/common/TextArea/TextArea';
import Lnb from '@/components/lnb/Lnb';

import * as S from '../style';

export type LnbType = 'all' | 'company' | 'school' | 'friend' | 'family' | 'etc';
export interface LnbObj {
    name: string;
    type: LnbType;
}

const ContentContainer = () => {
    const navigate = useNavigate();

    const LnbMenu: Array<LnbObj> = useMemo(
        () => [
            { name: '전체', type: 'all' },
            { name: '회사', type: 'company' },
            { name: '학교', type: 'school' },
            { name: '친구', type: 'friend' },
            { name: '가족', type: 'family' },
            { name: '기타', type: 'etc' },
        ],
        [],
    );
    const initialState = useMemo(() => LnbMenu[0].type, [LnbMenu]);
    const [isClick, setIsClick] = useState(initialState);
    const saveIsClick = useMemo(() => isClick, [isClick]);

    const handleClick = useCallback(
        (type: LnbType) => () => {
            if (isClick !== type) setIsClick(type);
        },
        [isClick],
    );

    const [textAreaValue, setTextAreaValue] = useState('');
    const handleValueChange = useCallback((value: string) => {
        setTextAreaValue(value);
    }, []);

    const isDisabled = useMemo(() => {
        return textAreaValue.length < 100;
    }, [textAreaValue]);

    return (
        <S.Wrapper>
            <S.Container>
                <Lnb handleClick={handleClick} isClick={saveIsClick as LnbType} LnbMenu={LnbMenu} />
                <S.ContentArea>
                    <S.ContentTitle>
                        <Input placeholder={'제목입니다.'} as={'Default'} value={''} />
                    </S.ContentTitle>
                    <S.ContentText>
                        <TextArea
                            placeholder={
                                '글의 내용을 쓰는 공간입니다. 상단의 카테고리를 선택하고, 공백을 포함하여 최소 100자 이상을 작성하여야 아래의 작성 완료 버튼이 활성화 됩니다.'
                            }
                            handleOnChange={handleValueChange}
                        />
                    </S.ContentText>
                    <S.ContentCount>{textAreaValue.length} / 최소 100자</S.ContentCount>
                </S.ContentArea>
                <Button
                    handleOnClick={() => navigate('/contents/create')}
                    label='작성 완료'
                    styleProps={{
                        width: '100%',
                        height: '48px',
                        margin: '10px 20px',
                        fontSize: '18px',
                    }}
                    disabled={isDisabled}
                />
            </S.Container>
        </S.Wrapper>
    );
};

export default ContentContainer;
