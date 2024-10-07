import { mediaMaxWidth } from "@/utils/media-query";
import { styled } from "styled-components";

export const Posts = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(33rem, 1fr));
    padding: 0 7rem;
    margin-top: 5rem;
    row-gap: 4rem;

    ${mediaMaxWidth('mobile')`
    padding: 0 3.5rem;
    `}
`;