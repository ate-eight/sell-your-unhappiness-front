interface Props {
    size?: number;
    color?: string;
}

const BackIcon = (props: Props) => {
    const { size = 24, color = '#000', ...rest } = props;

    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            color={color}
            {...rest}
        >
            <path
                id='arrow_back_ios_new'
                d='M16 21.1L6.90002 12L16 2.9L16.85 3.75L8.60002 12L16.85 20.25L16 21.1Z'
                fill='currentColor'
            />
        </svg>
    );
};

export default BackIcon;
