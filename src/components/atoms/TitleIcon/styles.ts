import { mediaMaxWidth } from "@/utils/media-query";
import { styled } from "styled-components";

export const TitleIcon = styled.h2`
    color: ${({ theme }) => theme.richBlack};
    font-size: 4.6rem;
    line-height: 6.2rem; 
    font-style: italic;
    font-weight: 700;
    position: relative;
    width: fit-content;

    &::after{
        content: "";
        display: block;
        height: 4.6rem;
        width: 3.5rem;
        background: url('./svgs/rain-yellow.svg') no-repeat;
        position: absolute;
        right: -5rem;
        top: 50%;
        transform: translateY(-40%);

    }

    ${mediaMaxWidth('mobile')`
        font-size: 3.1rem;
        text-align: center;
        margin: auto;
        transform: translateX(-1.5rem);
    `}
`;