interface Props {
    size?: number;
    color?: string;
}

const EditIcon = (props: Props) => {
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
                d='M11.8981 17.0173L20.1385 8.7769C20.2282 8.68715 20.2731 8.57817 20.2731 8.44997C20.2731 8.32177 20.2282 8.2128 20.1385 8.12305L19.4923 7.4769C19.4026 7.38715 19.2936 7.34227 19.1654 7.34227C19.0372 7.34227 18.9282 7.38715 18.8385 7.4769L10.5981 15.7173L11.8981 17.0173ZM5.87307 18.4615C4.56537 18.3782 3.57371 18.0666 2.89807 17.5269C2.22242 16.9871 1.8846 16.2429 1.8846 15.2942C1.8846 14.3519 2.28877 13.5881 3.0971 13.0028C3.90543 12.4176 5.03076 12.0583 6.47307 11.925C7.27693 11.8493 7.87981 11.6907 8.28172 11.449C8.68364 11.2073 8.8846 10.8743 8.8846 10.45C8.8846 9.90126 8.63877 9.4769 8.1471 9.1769C7.65543 8.8769 6.85576 8.66408 5.74807 8.53845L5.84615 7.55767C7.20385 7.71664 8.21635 8.03362 8.88365 8.50862C9.55097 8.98362 9.88463 9.63074 9.88463 10.45C9.88463 11.1538 9.59584 11.7205 9.01827 12.15C8.44071 12.5795 7.61667 12.8378 6.54615 12.925C5.32563 13.034 4.41025 13.2843 3.8 13.6759C3.18975 14.0676 2.88462 14.607 2.88462 15.2942C2.88462 15.9545 3.12757 16.4586 3.61345 16.8067C4.09935 17.1548 4.86025 17.373 5.89615 17.4615L5.87307 18.4615ZM11.8923 18.4442L9.17115 15.723L18.2981 6.61535C18.5545 6.35893 18.8478 6.23393 19.1779 6.24035C19.508 6.24676 19.8013 6.37176 20.0577 6.61535L21 7.55767C21.2564 7.81407 21.3846 8.11055 21.3846 8.4471C21.3846 8.78363 21.2564 9.08011 21 9.33652L11.8923 18.4442ZM9.18652 19C9.01859 19.041 8.87116 18.9981 8.74423 18.8711C8.61731 18.7442 8.57436 18.5968 8.61537 18.4288L9.17115 15.723L11.8923 18.4442L9.18652 19Z'
                fill='currentColor'
            />
        </svg>
    );
};

export default EditIcon;
