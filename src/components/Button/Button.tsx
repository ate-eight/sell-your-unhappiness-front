import * as S from './style';

interface Props {
    label: string;
    color?: 'primary' | 'secondary';
    full?: boolean;
    disabled?: boolean;
    handleOnClick?: () => void;
}

const Button = (props: Props) => {
    const { label, color = 'primary', full = false, disabled = false, handleOnClick } = props;

    return (
        <S.Button
            $color={color}
            $full={full}
            onClick={handleOnClick}
            $disabled={disabled}
            disabled={disabled}
        >
            {label}
        </S.Button>
    );
};

export default Button;
