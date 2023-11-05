import styled from "styled-components";
import ReviewsTotal from "@/components/molecules/ReviewsTotal";
import Button from "@/components/molecules/Button";
import TitlePage from "@/components/atoms/TitlePage";
import LazyImage from "@/components/atoms/LazyImage";
import { mediaMaxWidth } from "@/utils/media-query";
import _Wrapper from "@/styles/components/Wrapper";

export const Info = styled.section`
  margin-top: 9rem;
  position: relative;

  ${mediaMaxWidth('mobile')`
    margin-top: 3rem;
  `}
`;

export const Wrapper = styled(_Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.4rem;
  margin-bottom: 9.6rem;

  ${mediaMaxWidth("mobile")`
    align-items: center;
    margin-bottom: 2.5rem;
  `}
`;

export const Title = styled(TitlePage)`
  h1 {
    margin-bottom: 4.4rem;
  }
  span {
    color: ${({ theme }) => theme.ateneoBlue};
    font-weight: 700;
  }

  ${mediaMaxWidth('mobile')`
    h1{
      margin-bottom: 0;
    }
  `}
`;

export const ButtonZap = styled(Button)`
  border: none;
  background-color: ${({ theme }) => theme.whats};

  span {
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

export const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  z-index: 1;
`;

export const Float = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.7rem;
  position: absolute;
  right: 14rem;
  top: 0rem;

  ${mediaMaxWidth("desktop1024")`
      right: 7rem;
      top: -4rem
  `}

${mediaMaxWidth("mobile")`
      right: 0rem;
      top: 1rem;
  `}
`;

export const ButtonInfo = styled(Button)`
  cursor: default;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.brightYellow};
  box-shadow: 0rem 0.7rem 2rem 0rem ${({ theme }) => theme.orangeYellow80};

  ${mediaMaxWidth("mobile")`
    display: none;
  `}
`;

export const Reviews = styled(ReviewsTotal)``;

export const Img = styled(LazyImage)`
  width: 100%;
  height: fit-content;
`;

export const Data = styled.div`
  position: absolute;
  bottom: -4rem;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.lightSilver50};
  padding: 2.3rem 7rem;


  ${({theme}) => mediaMaxWidth('mobile')`
    position: relative;
    bottom: 0; 
    flex-direction: column;
    background-color: ${theme.brightGray}; 
    padding: 3rem 3.5rem;
    gap: 4.1rem;
  `}
`;

export const ContentDescription = styled.article`
  display: flex;
  align-items: center;
  gap: 2rem;
  p{
    font-size: 1.4rem;
    font-weight: 500;
    font-style: italic;
    line-height: 2.2rem;
    color: ${({theme}) => theme.richBlack80};
  }

  a{
    font-size: 1.8rem;
    font-weight: 600;
    font-style: italic;
    line-height: 2.2rem;
    color: ${({theme}) => theme.richBlack};
  }

  &:nth-of-type(1)::after{
    content: '';
    display: block;
    margin: 0 3.4rem;
    width: 0.1rem;
    height: 5.8rem;
    background: ${({theme}) => theme.ateneoBlue80};
  }

  ${mediaMaxWidth('mobile')`
    width: 80%;

    &:nth-of-type(1)::after{
      display: none;
    }
  `}
`;

export const Icone = styled(LazyImage)`
  width: 4rem;
`;
