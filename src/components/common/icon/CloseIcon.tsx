interface Props {
    size?: number;
    color?: string;
}

const CloseIcon = (props: Props) => {
    const { size = 24, color = '#000', ...rest } = props;

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            viewBox='0 0 24 24'
            fill='none'
            color={color}
            {...rest}
        >
            <path
                d='M6.4 18.3077L5.6923 17.6L11.2923 12L5.6923 6.39996L6.4 5.69226L12 11.2923L17.6 5.69226L18.3077 6.39996L12.7077 12L18.3077 17.6L17.6 18.3077L12 12.7077L6.4 18.3077Z'
                fill='currentColor'
            />
        </svg>
    );
};

export default CloseIcon;
