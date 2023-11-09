import { styled } from "styled-components";
import _Wrapper from "@/styles/components/Wrapper";
import LazyImage from "@/components/atoms/LazyImage";
import _Button from '@/components/molecules/Button'
import { mediaBetween, mediaMaxWidth } from "@/utils/media-query";


export const Services = styled.section`
    padding: 6.9rem 0;
    background: ${({ theme }) => theme.ateneoBlue};
    position: relative;
    height: 100%;
    margin: 3rem 0;

  ${mediaMaxWidth('mobile')`
     margin: 3rem 0;
  `}

    &::after{
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: url('https://www.bateriasgalileu.com.br/background/rain.png') no-repeat center;
        background-position: center 6.9rem;
        background-size: contain;
        position: absolute;
        top: 0;
        z-index: 1;

        ${mediaMaxWidth('mobile')`
            width: 90%;
            left: 5%;
            right: 5%;
        `}
    }
`;

export const Wrapper = styled(_Wrapper)`
    display: flex;
    flex-direction: column;
    gap: 5.2rem;
    position: relative;
    z-index: 2;

    ${mediaMaxWidth('mobile')`
        align-items: center;
    `}
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.white};
    font-size: 5rem;
    font-style: italic;
    font-weight: 700;
    line-height: 6.2rem;
    text-transform: capitalize;

    ${mediaMaxWidth('mobile')`
        font-size: 3.4rem;
        line-height: 4.9rem;
        text-align: center;
    `}
`;

export const Imgs = styled.figure`
    display: flex;
    gap: 2.5rem;

    ${mediaMaxWidth('mobile')`
        flex-direction: column;
    `}
`;

export const Img = styled(LazyImage)`
    width: 33rem;
    height: fit-content;

    ${mediaMaxWidth('desktop1024')`
        width: 100%;
    `}

    ${mediaMaxWidth('mobile')`
        width: 100%;
    `}
`;

export const Article = styled.article``;

export const TitleList = styled.h3`
    color: ${({ theme }) => theme.white};
    font-size: 2.8rem;
    font-style: italic;
    font-weight: 600;
    line-height: 6.2rem;

    ${mediaMaxWidth('mobile')`
        font-size: 3rem;
        line-height: 4.1rem;
        text-align: center;
    `}
`;

export const List = styled.ul`
    margin: 3rem 0 6.6rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    ${mediaMaxWidth('mobile')`
        gap: 4rem;
        margin: 3.6rem 0 5.5rem;
    `}
`;

export const Item = styled.li`
    display: flex;
    gap: 2.5rem;

    ${mediaMaxWidth('mobile')`
        gap: 1rem;
        justify-content: center;
    `}
`;

export const Icon = styled(LazyImage)`
    width: 1.5rem;
    height: fit-content;
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.white};
    font-size: 1.6rem;
    font-style: italic;
    font-weight: 400;

    ${mediaMaxWidth('mobile')`
        font-size: 1.2rem;
        text-align: center;
    `}
`;

export const Button = styled(_Button)` 
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.ateneoBlue};
    padding: 2rem 2.6rem;

    span{
        font-size: 1.6rem;

    }
`;
