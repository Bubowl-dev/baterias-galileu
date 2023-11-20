import { styled } from "styled-components";
import LazyImage from "@/components/atoms/LazyImage";
import Link from "next/link";

export const Card = styled.article`
    width: 33rem;
`;

export const CardLink = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const Img = styled(LazyImage)`
    width: 100%;
    border-radius: 1.5rem;
    height: 26rem;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.richBlack};
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    text-transform: capitalize;
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.richBlack};
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
`;
