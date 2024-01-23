import { useParams } from 'react-router-dom';

import * as S from '../style';

const DetailPage = () => {
    const { id } = useParams();

    return <S.Container>Detail Post : {id}</S.Container>;
};

export default DetailPage;
