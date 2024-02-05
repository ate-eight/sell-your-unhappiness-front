import styled from '@emotion/styled';

export const H1 = styled.h1<{ color?: string }>`
    color: ${(props) => (props.color ? props.color : props.theme.color.gray[900])};
    font-family: ${(props) => props.theme.typography.type.ExtraBold};
    font-size: ${(props) => props.theme.typography.size.l2}px;
    font-style: normal;
    margin: 0;
    font-weight: ${(props) => props.theme.typography.weight[600]};
    line-height: ${(props) => props.theme.typography.lineHeight.l2}px;
    font-display: swap;
`;

export const H2 = styled.h2<{ color?: string }>`
    color: ${(props) => (props.color ? props.color : props.theme.color.gray[900])};
    font-family: ${(props) => props.theme.typography.type.SemiBold}
    font-size: ${(props) => props.theme.typography.size.l1}px;
    font-style: normal;
    margin: 0;
    font-weight: ${(props) => props.theme.typography.weight[600]};
    line-height: ${(props) => props.theme.typography.lineHeight.l1}px;
    font-display: swap;
`;

export const H4_ENG = styled.h3<{ color?: string }>`
    color: ${(props) => (props.color ? props.color : props.theme.color.gray[900])};
    font-family: ${(props) => props.theme.typography.type.SemiBold};
    font-size: ${(props) => props.theme.typography.size.m2}px;
    font-style: normal;
    margin: 0;
    font-weight: ${(props) => props.theme.typography.weight[600]};
    line-height: ${(props) => props.theme.typography.lineHeight.m2}px;
    font-display: swap;
`;

export const H4_KR = styled.h4<{ color?: string }>`
    color: ${(props) => (props.color ? props.color : props.theme.color.gray[900])};
    font-family: ${(props) => props.theme.typography.type.Medium};
    font-size: ${(props) => props.theme.typography.size.m2}px;
    font-style: normal;
    margin: 0;
    font-weight: ${(props) => props.theme.typography.weight[500]};
    line-height: ${(props) => props.theme.typography.lineHeight.m2}px;
    font-display: swap;
`;

export const BodyM = styled.p<{ color?: string }>`
    color: ${(props) => (props.color ? props.color : props.theme.color.gray[900])};
    font-family: ${(props) => props.theme.typography.type.Regular}, sans-serif;
    font-size: ${(props) => props.theme.typography.size.m1}px;
    font-style: normal;
    margin: 0;
    font-weight: ${(props) => props.theme.typography.weight[400]};
    line-height: ${(props) => props.theme.typography.lineHeight.m1}px;
    font-display: swap;
`;

export const BodyS = styled.p<{ color?: string }>`
    color: ${(props) => (props.color ? props.color : props.theme.color.gray[900])};
    font-family: ${(props) => props.theme.typography.type.Regular}, sans-serif;
    font-size: ${(props) => props.theme.typography.size.s3}px;
    font-style: normal;
    margin: 0;
    font-weight: ${(props) => props.theme.typography.weight[400]};
    line-height: ${(props) => props.theme.typography.lineHeight.s3}px;
    font-display: swap;
`;

export const CaptionM = styled.p<{ color?: string }>`
    color: ${(props) => (props.color ? props.color : props.theme.color.gray[900])};
    font-family: ${(props) => props.theme.typography.type.Regular}, sans-serif;
    font-size: ${(props) => props.theme.typography.size.s2}px;
    font-style: normal;
    margin: 0;
    font-weight: ${(props) => props.theme.typography.weight[400]};
    line-height: ${(props) => props.theme.typography.lineHeight.s2}px;
    font-display: swap;
`;

export const CaptionS = styled.p<{ color?: string }>`
    color: ${(props) => (props.color ? props.color : props.theme.color.gray[900])};
    font-family: ${(props) => props.theme.typography.type.Regular}, sans-serif;
    font-size: ${(props) => props.theme.typography.size.s1}px;
    font-style: normal;
    margin: 0;
    font-weight: ${(props) => props.theme.typography.weight[400]};
    line-height: ${(props) => props.theme.typography.lineHeight.s1}px;
    font-display: swap;
`;
