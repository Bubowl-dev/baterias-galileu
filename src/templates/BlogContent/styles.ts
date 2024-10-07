import { styled } from 'styled-components';
import _Wrapper from '@/styles/components/Wrapper';
import { mediaMaxWidth } from '@/utils/media-query';
import Button from '@/components/molecules/Button';
import LazyImage from '@/components/atoms/LazyImage';

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

export const Img = styled(LazyImage)`
  width: 60%;
  height: fit-content;
  margin-bottom: 3rem;

  ${mediaMaxWidth('mobile')`
    width: 100%;
  `}
`;

export const Article = styled.article`
  width: 100%;
`;

export const BateriasContent = styled.article`
  h1 {
    color: ${({ theme }) => theme.richBlack};
    font-size: 4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.8rem;
    margin: 0rem 0 3rem;

    ${mediaMaxWidth('mobile')`
            font-size: 2.6rem;
            line-height: 3.2rem;
    `}
  }

  h2 {
    color: ${({ theme }) => theme.richBlack};
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.8rem;
    margin: 3rem 0;

    ${mediaMaxWidth('mobile')`
            font-size: 2.2rem;
            line-height: 2.8rem;
        `}
  }

  h3 {
    color: ${({ theme }) => theme.richBlack};
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.8rem;
    margin: 3rem 0;

    ${mediaMaxWidth('mobile')`
            font-size: 2rem;
            line-height: 2.8rem;
    `}
  }

  h4 {
    color: ${({ theme }) => theme.richBlack};
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.8rem;
    margin: 3rem 0;

    ${mediaMaxWidth('mobile')`
            font-size: 1.8rem;
            line-height: 2.8rem;
        `}
  }
  ul {
    margin-left: 1.8rem;
  }

  li {
    list-style: disc;
  }

  strong {
    font-size: 1.6rem;
    font-weight: bold;

    ${mediaMaxWidth('mobile')`
      font-size: 1.4rem;
    `}
  }

  p,
  li,
  span {
    color: ${({ theme }) => theme.richBlack};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.7rem;
    margin-bottom: 1.4rem;

    ${mediaMaxWidth('mobile')`
            font-size: 1.2rem;
            line-height: 2.2rem;
        `}
  }

  img {
    width: 30rem;
    height: fit-content;

    &.img {
      width: 100% !important;
      border-radius: 1.5rem;
      margin-bottom: 30px;
    }

    ${mediaMaxWidth('mobile')`
      width: 18rem;
    `}
  }

  figure {
    display: flex;
    gap: 3.3rem;

    ${mediaMaxWidth('mobile')`
            flex-direction: column;
        `}
  }
`;

export const ModalZap = styled.div`
  width: 35%;

  ${mediaMaxWidth('desktop1024')`
        width: 45%;
    `}

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

  img {
    width: 1.7rem;
  }

  span {
    font-size: 1.6rem;
  }
`;
