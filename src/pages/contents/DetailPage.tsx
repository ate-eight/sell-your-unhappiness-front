import * as S from '../style';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
    const { id } = useParams();

    return <S.Container>Detail Post : {id}</S.Container>;
};

export default DetailPage;
