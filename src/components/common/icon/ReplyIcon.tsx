interface Props {
    size?: number;
    color?: string;
}

const ReplyIcon = (props: Props) => {
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
                d='M5 4L5 6.925C5 7.86249 5.34295 8.66562 6.02885 9.33437C6.71475 10.0031 7.53847 10.3375 8.5 10.3375L18.0789 10.3375L13.9789 6.34L14.6923 5.64999L20 10.825L14.6923 16L13.9788 15.31L18.0789 11.3125L8.5 11.3125C7.25768 11.3125 6.19711 10.8841 5.31828 10.0272C4.43943 9.17032 4 8.13625 4 6.925L4 4L5 4Z'
                fill='currentColor'
            />
        </svg>
    );
};

export default ReplyIcon;
