import { styled } from "styled-components";
import _Wrapper from '@/styles/components/Wrapper'
import { mediaMaxWidth } from "@/utils/media-query";
import Button from "@/components/molecules/Button";

export const Content = styled.section`
    margin-top: 8.2rem;

    ${mediaMaxWidth('mobile')`
        margin-top: 2rem;
        padding-top: 5rem;
        border-top: 1px solid rgba(14, 64, 97, 0.20);
    `}
`;

export const Wrapper = styled(_Wrapper)`
    display: flex;
    gap: 9.2rem;
    height: 100%;
`;

export const Article = styled.article`
        h1{
        color: ${({ theme }) => theme.richBlack};
        font-size: 4rem;
        font-style: normal;
        font-weight: 700;
        line-height: 6.2rem;
        text-transform: capitalize;
        margin-bottom: 4.8rem;

        ${mediaMaxWidth('mobile')`
            font-size: 2.6rem;
            line-height: 4.2rem;
        `}
    }

    h2{
        color: ${({ theme }) => theme.richBlack};
        font-size: 3.6rem;
        font-style: normal;
        font-weight: 700;
        line-height: 5.8rem;
        text-transform: capitalize;
        margin-bottom: 4rem;

        ${mediaMaxWidth('mobile')`
            font-size: 2.2rem;
            line-height: 3.8rem;
        `}
    }

    h3{
        color: ${({ theme }) => theme.richBlack};
        font-size: 3.2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 5.8rem;
        text-transform: capitalize;
        margin-bottom: 4rem;

        ${mediaMaxWidth('mobile')`
            font-size: 2rem;
            line-height: 3.8rem;
        `}
    }

    p{
        color: ${({ theme }) => theme.richBlack};
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2.7rem;
        text-transform: capitalize;
        margin-bottom: 1.4rem;

        ${mediaMaxWidth('mobile')`
            font-size: 1.2rem;
            line-height: 2.2rem;
        `}
    }

    img{
        width: 30rem;
        height: fit-content;

        ${mediaMaxWidth('mobile')`
            width: 18rem;
        `}
    }

    figure{
        display: flex;
        gap: 3.3rem;

        ${mediaMaxWidth('mobile')`
            flex-direction: column;
        `}
    }
`;

export const ModalZap = styled.div`
    width: 75%;

    ${mediaMaxWidth('mobile')`
        display: none;
    `}
`;

export const Zap = styled.div`
    position: sticky;
    top: 4rem;
    background-color: ${({ theme }) => theme.ateneoBlue};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    padding: 3rem;
`;

export const TextModal = styled.p`
    color: ${({ theme }) => theme.white};
    font-size: 1.6rem;
    font-style: italic;
    font-weight: 600;
    line-height: 2.7rem;
`;

export const Btn = styled(Button)`
    background-color: ${({ theme }) => theme.whats};
    padding: 1.7rem 3rem;

    ${mediaMaxWidth('desktop1024')`
        padding: 1.7rem 2rem;

        span{
            font-size: 1.4rem;
        }
    `}

    img{
        width: 1.7rem;
    }
    
    span{
        font-size: 1.6rem;
    }
`;



