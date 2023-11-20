import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const TitlePage = styled.article``;

export const Title = styled.h1`
  color: ${({ theme }) => theme.richBlack};
  font-size: 5.2rem;
  line-height: 6.2rem;
  font-weight: 700;

  ${mediaMaxWidth("mobile")`
    text-align: center;
    font-size: 5.2rem;
    line-height: 5.1rem;
  `}
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.richBlack};
  font-size: 4.2rem;
  line-height: 6.2rem;
  font-weight: 700;

  ${mediaMaxWidth("mobile")`
    text-align: center;
    font-size: 4.2rem;
    line-height: 5.1rem;
  `}
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.richBlack};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.2rem;

  ${mediaMaxWidth("mobile")`
    text-align: center;
  `}
`;
