import TitlePage from "@/components/atoms/TitlePage";
import { mediaMaxWidth } from "@/utils/media-query";
import { styled } from "styled-components";

export const Title = styled(TitlePage)`
    padding: 0 7rem;
    margin-top: 5rem;

    > h1{
        margin-bottom: 3.5rem;
    }

    ${mediaMaxWidth('mobile')`
        padding: 0 3.5rem;

        > h1{
            margin-bottom: 3rem;
        }
    `}
`;