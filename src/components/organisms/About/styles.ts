import LazyImage from "@/components/atoms/LazyImage";
import TitleIcon from "@/components/atoms/TitleIcon";
import _Wrapper from "@/styles/components/Wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import { styled } from "styled-components";

export const About = styled.section`
    border-top: 1px solid rgba(14, 64, 97, 0.20);
    padding-top: 6rem;
    margin-bottom: 9rem;
`;

export const Wrapper = styled(_Wrapper)`
    display: flex;
    gap: 10rem;
    justify-content: space-around;

    ${mediaMaxWidth('desktop1024')`
        gap: 5rem
    `}

    ${mediaMaxWidth('tablet')`
        gap: 1rem;
    `}

    ${mediaMaxWidth('mobile')`
        flex-direction: column;
        align-items: center;
        gap: 5rem;
    `}
`;

export const InfoSection = styled.article``;

export const Title = styled(TitleIcon)`
    font-size: 3.1rem;

    span{
        color: ${({ theme }) => theme.ateneoBlue};
        font-weight: 700;
    }
`;

export const Description = styled.p`
    width: 38rem;
    margin-top: 6.2rem;
    color: ${({ theme }) => theme.richBlack};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.8rem;

    ${mediaMaxWidth('tablet')`
        width: 30rem;
    `}

    ${mediaMaxWidth('mobile')`
        margin-top: 5.5rem;
        text-align: center;
        font-size: 1.2rem;
        width: 30rem;
    `}
`;

export const Owner = styled.div``;

export const Imgs = styled.figure`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3.9rem;
    gap: 1.8rem;
    position: relative;

    picture{
        width: 100%;
    }

    ${mediaMaxWidth('tablet')`
        picture:nth-of-type(1){
            position: absolute;
        }
    `}

    ${mediaMaxWidth('mobile')`
        flex-direction: column;
    `}
`;

export const Img = styled(LazyImage)`
    width: 100%;
    height: fit-content;
    position: relative;
    z-index: 0;
    opacity: 1;

`;

export const ContentOwner = styled.article`
    display: flex;
    padding: 3.1rem 5.2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.7rem;
    border-radius: 1rem;
    border: 1px solid ${({ theme }) => theme.ateneoBlue33};
    background: ${({ theme }) => theme.white};
    box-shadow: 0rem 0.7rem 0rem ${({ theme }) => theme.richBlack06};
`;

export const Icon = styled(LazyImage)`
    width: 3.4rem;
    height: fit-content;
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.richBlack};
    text-align: center;
    font-size: 1.6rem;
    font-style: italic;
    font-weight: 600;
    line-height: 2.8rem;
`;

export const TitleOwner = styled.p`
    color: ${({ theme }) => theme.richBlack};
    text-align: center;
    font-size: 1.4rem;
    font-style: italic;
    font-weight: 400;
    line-height: 2.8rem;
`;
