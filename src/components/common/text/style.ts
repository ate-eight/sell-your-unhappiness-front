import styled from '@emotion/styled';

export const H1 = styled.h1<{ $color?: string }>`
    color: ${(props) => (props.$color ? props.$color : props.theme.color.gray[900])};
    font-family: ${({ theme }) => theme.typography.type.ExtraBold};
    font-size: ${({ theme }) => theme.typography.size.l2}px;
    font-style: normal;
    margin: 0;
    width: fit-content;
    font-weight: ${({ theme }) => theme.typography.weight[600]};
    line-height: ${({ theme }) => theme.typography.lineHeight.l2}px;
`;

export const H2 = styled.h2<{ $color?: string }>`
    color: ${(props) => (props.$color ? props.$color : props.theme.color.gray[900])};
    font-family: ${({ theme }) => theme.typography.type.SemiBold};
    font-size: ${({ theme }) => theme.typography.size.l1}px;
    font-style: normal;
    margin: 0;
    width: fit-content;
    font-weight: ${({ theme }) => theme.typography.weight[600]};
    line-height: ${({ theme }) => theme.typography.lineHeight.l1}px;
`;

export const H4_ENG = styled.h4<{ $color?: string }>`
    color: ${(props) => (props.$color ? props.$color : props.theme.color.gray[900])};
    font-family: ${({ theme }) => theme.typography.type.SemiBold};
    font-size: ${({ theme }) => theme.typography.size.m2}px;
    font-style: normal;
    margin: 0;
    font-weight: ${({ theme }) => theme.typography.weight[600]};
    line-height: ${({ theme }) => theme.typography.lineHeight.m2}px;
    width: fit-content;
`;

export const H4_KR = styled.h4<{ $color?: string }>`
    color: ${(props) => (props.$color ? props.$color : props.theme.color.gray[900])};
    font-family: ${({ theme }) => theme.typography.type.Medium};
    font-size: ${({ theme }) => theme.typography.size.m2}px;
    font-style: normal;
    margin: 0;
    font-weight: ${({ theme }) => theme.typography.weight[500]};
    line-height: ${({ theme }) => theme.typography.lineHeight.m2}px;
    width: fit-content;
`;

export const BodyM = styled.p<{ $color?: string }>`
    color: ${(props) => (props.$color ? props.$color : props.theme.color.gray[900])};
    font-family: ${({ theme }) => theme.typography.type.Regular};
    font-size: ${({ theme }) => theme.typography.size.m1}px;
    font-style: normal;
    margin: 0;
    font-weight: ${({ theme }) => theme.typography.weight[400]};
    line-height: ${({ theme }) => theme.typography.lineHeight.m1}px;
    width: fit-content;
`;

export const BodyS = styled.p<{ $color?: string }>`
    color: ${(props) => (props.$color ? props.$color : props.theme.color.gray[900])};
    font-family: ${({ theme }) => theme.typography.type.Regular};
    font-size: ${({ theme }) => theme.typography.size.s3}px;
    font-style: normal;
    margin: 0;
    font-weight: ${({ theme }) => theme.typography.weight[400]};
    line-height: ${({ theme }) => theme.typography.lineHeight.s3}px;
    width: fit-content;
`;

export const CaptionM = styled.p<{ $color?: string }>`
    color: ${(props) => (props.$color ? props.$color : props.theme.color.gray[900])};
    font-family: ${({ theme }) => theme.typography.type.Regular};
    font-size: ${({ theme }) => theme.typography.size.s2}px;
    font-style: normal;
    margin: 0;
    font-weight: ${({ theme }) => theme.typography.weight[400]};
    line-height: ${({ theme }) => theme.typography.lineHeight.s2}px;
    width: fit-content;
`;

export const CaptionS = styled.p<{ $color?: string }>`
    color: ${(props) => (props.$color ? props.$color : props.theme.color.gray[900])};
    font-family: ${({ theme }) => theme.typography.type.Regular}, sans-serif;
    font-size: ${({ theme }) => theme.typography.size.s1}px;
    font-style: normal;
    margin: 0;
    font-weight: ${({ theme }) => theme.typography.weight[400]};
    line-height: ${({ theme }) => theme.typography.lineHeight.s1}px;
    width: fit-content;
`;
