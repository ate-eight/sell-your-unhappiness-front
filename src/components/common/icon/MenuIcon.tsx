interface Props {
    size?: number;
    color?: string;
}

const MenuIcon = (props: Props) => {
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
                d='M4 17.2693V16.2693H20V17.2693H4ZM4 12.5001V11.5001H20V12.5001H4ZM4 7.73083V6.73083H20V7.73083H4Z'
                fill='currentColor'
            />
        </svg>
    );
};

export default MenuIcon;
