import LazyImage from "@/components/atoms/LazyImage";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const ReviewsTotal = styled.div`
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.black10};
  box-shadow: 0px 14px 17px 0px ${({ theme }) => theme.eerieBlack40};
  padding: 2rem 2.3rem;
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 1.9rem;

  ${mediaMaxWidth('mobile')`
    padding: 1.5rem 2.1rem;
  `}
`;

export const InfoReviews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 0.9rem;

  ${mediaMaxWidth('mobile')`
    gap: 0.7rem;
  `}
`;

export const Peoples = styled.div`
  position: relative;
  width: 120px;

  picture:nth-of-type(2),
  picture:nth-of-type(3) {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  picture:nth-of-type(2) {
    left: 35px;
  }

  picture:nth-of-type(3) {
    left: 70px;
  }

  ${mediaMaxWidth("mobile")`
    display: none;
  `}
`;

export const PeoplesImg = styled(LazyImage)`
  border: 0.19rem solid ${({ theme }) => theme.white};
  border-radius: 50%;
  box-shadow: 0rem 0.2rem 1rem ${({ theme }) => theme.black20};
`;

export const TitleReviews = styled.p`
  color: ${({ theme }) => theme.richBlack};
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 500;
  line-height: 2.2rem;
  text-transform: capitalize;
`;
