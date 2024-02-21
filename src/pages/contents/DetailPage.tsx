import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as S from '../../components/common/layout/style';

const DetailPage = () => {
    const { id } = useParams();

    return (
        <S.Container>
            Detail Post : {id}
            <div>
                <Link to={`/contents/${id}/comment`}>코멘트</Link>
            </div>
        </S.Container>
    );
};

export default DetailPage;
