import styled from "styled-components";
import LazyImage from "../LazyImage";
import { mediaMaxWidth } from "@/utils/media-query";

export const Stars = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Star = styled(LazyImage)`
  width: 1.8rem;

  ${mediaMaxWidth('mobile')`
    width: 2rem;
  `}
`;
