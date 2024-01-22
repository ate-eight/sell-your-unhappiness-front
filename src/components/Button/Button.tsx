import * as S from './style';

interface Props {
    label: string;
}

const Button = (props: Props) => {
    const { label } = props;

    return <S.Button>{label}</S.Button>;
};

export default Button;
