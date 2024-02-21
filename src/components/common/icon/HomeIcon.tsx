interface Props {
    size?: number;
    color?: string;
}

const HomeIcon = (props: Props) => {
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
                d='M6 19H9.6923V13.1154H14.3077V19H18V10L12 5.46157L6 10V19ZM5 20V9.50002L12 4.21155L19 9.50002V20H13.3077V14.1154H10.6923V20H5Z'
                fill='currentColor'
            />
        </svg>
    );
};

export default HomeIcon;
