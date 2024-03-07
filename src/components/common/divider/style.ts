import styled from '@emotion/styled';
export const Divider = styled.div<{ $size?: number; $color?: number }>`
    width: 100%;
    height: ${(props) => `${props.$size ? props.$size : 1}px`};
    background-color: ${(props) => props.theme.color.gray[props.$color || 100]};
`;
