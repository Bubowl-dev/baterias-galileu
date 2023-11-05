import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 7rem;

  ${mediaMaxWidth('mobile')`
    padding: 0 3.5rem;
  `}
`;

export default Wrapper;
