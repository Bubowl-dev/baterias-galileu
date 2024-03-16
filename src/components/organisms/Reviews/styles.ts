import { styled } from "styled-components";
import _Wrapper from '@/styles/components/Wrapper'
import _Stars from '@/components/atoms/Stars'
import LazyImage from "@/components/atoms/LazyImage";
import { mediaMaxWidth } from "@/utils/media-query";
import Link from "next/link";

export const Reviews = styled.section`
    padding: 3.9rem 0;

    ${mediaMaxWidth('mobile')`
        padding: 3rem 0;
    `}
`;

export const Wrapper = styled(_Wrapper)``;

export const Content = styled.article`
    margin-bottom: 5.5rem;

    ${mediaMaxWidth('mobile')`
        margin-bottom: 4.5rem;
    `}
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.richBlack};
    font-size: 4.6rem;
    font-style: italic;
    font-weight: 700;
    line-height: 6.2rem;

    span{
        color: ${({ theme }) => theme.ateneoBlue};
        font-weight: 700;
    }

    ${mediaMaxWidth('mobile')`
        font-size: 2.8rem;
        line-height: 3.6rem;
        text-align: center;
    `}
`;

export const Description = styled.p`
    margin-top: 2.7rem;
    color: ${({ theme }) => theme.ateneoBlue};
    font-size: 2rem;
    line-height: 2.8rem;
    font-style: italic;
    font-weight: 500;

    ${mediaMaxWidth('mobile')`
        margin-top: 4.1rem;
        font-size: 1.6rem;
        line-height: 2.8rem;
        text-align: center;
    `}
`;

export const Comments = styled.div`
    display: flex;
    gap: 2.1rem;

    ${mediaMaxWidth('mobile')`
        flex-direction: column;
    `}

`;

export const Review = styled.div`
    background: ${({ theme }) => theme.white};
    border: 0.1rem  solid ${({ theme }) => theme.ateneoBlue33};
    box-shadow: 0rem 0.7rem 0rem ${({ theme }) => theme.richBlack06};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    padding: 3rem;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 2.5rem;
`;

export const User = styled.div``;

export const Name = styled(Link)`
    text-decoration: underline;
    color: ${({ theme }) => theme.richBlack};
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 500;
    line-height: 2.2rem;
    text-decoration-line: underline;
    text-transform: capitalize;
`;

export const Stars = styled(_Stars)``;

export const Profile = styled.img`
    width: 3.5rem;
    height: fit-content;
`;

export const Mensage = styled.p`
    width: 25rem;
    color: ${({ theme }) => theme.richBlack};
    font-size: 1.4rem;
    font-style: italic;
    font-weight: 500;
    line-height: 2.8rem;

    ${mediaMaxWidth('desktop1024')`
        width: fit-content;
    `}
`;
