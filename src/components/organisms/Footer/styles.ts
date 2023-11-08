import styled from "styled-components";
import _Wrapper from '@/styles/components/Wrapper'
import _Nav from "@/components/atoms/Nav";
import LazyImage from "@/components/atoms/LazyImage";
import { ItemLink, Menu } from "@/components/atoms/Nav/styles";
import { mediaMaxWidth } from "@/utils/media-query";

export const Footer = styled.footer`
    background: ${({ theme }) => theme.ateneoBlue};
`;

export const Background = styled.div``;

export const Content = styled.div``;

export const Wrapper = styled(_Wrapper)`
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    padding-top: 3rem;
    padding-bottom: 3rem;

    ${mediaMaxWidth('mobile')`
        flex-direction: column;
        align-items: start;
    `}
`;

export const About = styled.div`
    > div{
        padding-top: 5rem;
        padding-bottom: 5rem;
        gap: 4.9rem;

        ${mediaMaxWidth('mobile')`
            gap: 3rem;
            padding-top: 3rem;
            padding-bottom: 3rem;
        `}
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

export const Img = styled(LazyImage)`
    width: 3rem;
    height: fit-content;

    ${mediaMaxWidth('mobile')`

    `}
`;

export const TitleAbout = styled.h2`
    color: ${({ theme }) => theme.white};
    font-size: 2.7rem;
    font-style: italic;
    font-weight: 600;
    line-height: 6.2rem;

    ${mediaMaxWidth('mobile')`
        font-size: 2rem;
    `}
`;

export const Nav = styled(_Nav)`
    ${ItemLink}{
        color: ${({ theme }) => theme.white};
        font-size: 1.4rem;

        ${mediaMaxWidth('mobile')`
            font-size: 1.2rem;
        `}
    }

    ${Menu}{
        ${mediaMaxWidth('mobile')`
            display: flex;
            flex-direction: column;
            gap: 1rem;
        `}

    }
`;

export const Info = styled.div`
    > div{
        align-items: start;
        gap: 6.5rem;

        ${mediaMaxWidth('mobile')`
            gap: 4.6rem;
        `}
    }
`;

export const ColInfo = styled.div`
    display: flex;
    gap: 2.4rem;
`;

export const Icon = styled(LazyImage)`
    width: 2.9rem;
    height: fit-content;
`;

export const InfoContent = styled.div``;

export const TitleInfo = styled.h3`
    color: ${({ theme }) => theme.white};
    font-size: 1.4rem;
    font-style: italic;
    font-weight: 500;
    line-height: 2.2rem;
    text-transform: capitalize;
    margin-bottom: 1.3rem;
`;

export const List = styled.ul``;

export const Item = styled.li`
    color: ${({ theme }) => theme.white};
    opacity: 0.7;
    font-size: 1.4rem;
    font-style: italic;
    font-weight: 600;
    line-height: 2.2rem;
    text-transform: capitalize;
`;

export const Address = styled.article`
    color: ${({ theme }) => theme.white};
    opacity: 0.7;
    font-size: 1.4rem;
    font-style: italic;
    font-weight: 600;
    line-height: 2.2rem;
    text-transform: capitalize;
`;

export const linkTel = styled.a``;

export const Where = styled.div`
    > div{
        flex-direction: column;
        border: none;
        align-items: start;
    }
`;

export const WhereSocialShare = styled.div`
    display: flex;
    align-items: start;
    gap: 6.1rem;

    ${mediaMaxWidth('mobile')`
        flex-direction: column-reverse;
        gap: 3.2rem;
    `}
`;

export const Imgs = styled.figure`
    display: flex;
    flex-wrap: wrap;
    gap: 1.9rem;

    ${Img}{
        width: 13rem;

    }
`;

export const WhereContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
`;

export const WhereTitle = styled.h2`
    color: ${({ theme }) => theme.white};
    font-size: 1.9rem;
    font-style: italic;
    font-weight: 600;
`;

export const linkInsta = styled.a`
    color: ${({ theme }) => theme.white};
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 400;
`;

export const SocialShare = styled.div`
    display: flex;
    gap: 1.3rem;
`;

export const IconWhere = styled(LazyImage)``;

export const Bubowl = styled.div`
    margin-top: 4rem;
`;

export const ContentBubowl = styled.p`
    color: ${({ theme }) => theme.white};
    font-size: 1.4rem;
    font-style: italic;
    font-weight: 300;

    ${mediaMaxWidth('mobile')`
        display: flex;
        flex-direction: column;
        gap: 1.9rem;
    `}
`;

export const line = styled.span`
    ${mediaMaxWidth('mobile')`
        display: none;
    `}
`;

export const LinkBubowl = styled.a`
    &:hover{
        text-decoration: underline;
    }
`;

export const ImgBubowl = styled(LazyImage)`
    width: 2rem;
    height: fit-content;
    margin-left: 1.6rem;
`;