interface Props {
    size?: number;
    color?: string;
}

const EditFillIcon = (props: Props) => {
    const { size = 24, color = '#000', ...rest } = props;

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            viewBox='0 0 48 48'
            fill='none'
            color={color}
            {...rest}
        >
            <path
                d='M11.2961 36.6807C8.87565 36.5064 7.01603 35.8955 5.7173 34.8481C4.41856 33.8006 3.7692 32.3807 3.7692 30.5884C3.7692 28.7935 4.56151 27.3269 6.14615 26.1884C7.73075 25.0499 9.92433 24.3474 12.7269 24.0807C14.4243 23.9217 15.6891 23.5782 16.5211 23.05C17.3532 22.5218 17.7692 21.8051 17.7692 20.9C17.7692 19.7282 17.2859 18.8326 16.3192 18.2134C15.3525 17.5942 13.7487 17.1423 11.5077 16.8577L11.6807 15.3577C14.1602 15.6833 16.0513 16.3153 17.3538 17.2538C18.6564 18.1923 19.3077 19.4077 19.3077 20.9C19.3077 22.2025 18.7404 23.273 17.6057 24.1115C16.4711 24.95 14.8897 25.4525 12.8615 25.6192C10.3308 25.8371 8.43911 26.3602 7.18655 27.1884C5.93398 28.0166 5.3077 29.1499 5.3077 30.5884C5.3077 31.9089 5.80961 32.9455 6.81345 33.698C7.81731 34.4506 9.32308 34.932 11.3307 35.1423L11.2961 36.6807ZM25.1269 35.5577L19.6846 30.1153L36.9731 12.8653C37.3885 12.4756 37.8493 12.289 38.3557 12.3057C38.8622 12.3224 39.3231 12.5089 39.7384 12.8653L42.3769 15.4923C42.7923 15.9077 43 16.3833 43 16.9192C43 17.4551 42.7923 17.9179 42.3769 18.3077L25.1269 35.5577ZM18.373 38C18.0372 38.082 17.7423 37.9961 17.4884 37.7423C17.2346 37.4884 17.1487 37.1936 17.2307 36.8577L18.3807 31.3692L23.9 36.8884L18.373 38Z'
                fill='currentColor'
            />
        </svg>
    );
};

export default EditFillIcon;