import styled from 'styled-components';
import _Wrapper from '@/styles/components/Wrapper';
import LazyImage from '@/components/atoms/LazyImage';
import Button from '@/components/molecules/Button';
import { mediaMaxWidth } from '@/utils/media-query';
import { Text } from '@/components/molecules/Button/styles';

export const WhyChoose = styled.section`
  margin: 3rem 0;
  padding: 3rem 0;

  ${mediaMaxWidth('mobile')`
     margin: 3rem 0;
  `}
`;

export const Wrapper = styled(_Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaMaxWidth('tablet')`
    flex-direction: column;
    gap: 1.2rem;
  `}
`;

export const Img = styled(LazyImage)`
  width: 68.2rem;
  height: 100%;

  ${mediaMaxWidth('desktop1024')`
    width: 50.2rem;
  `}

  ${mediaMaxWidth('tablet')`
    width: 100%;
    border-radius: 0.5rem;
  `}
`;

export const Article = styled.article`
  width: 48rem;
  background: ${({ theme }) => theme.white};
  box-shadow: 0rem 0rem 2.2rem 0rem ${({ theme }) => theme.richBlack06};
  border: 1px solid ${({ theme }) => theme.green80};
  border-radius: 1rem;
  padding: 4.6rem 4.8rem;

  ${mediaMaxWidth('tablet')`
    width: 100%;
    padding: 4.6rem 4rem;
  `}
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.richBlack};
  font-size: 3.1rem;
  line-height: 6.2rem;
  font-style: italic;
  font-weight: 600;

  ${mediaMaxWidth('desktop1024')`
      font-size: 2.2rem;
      line-height: 3.2rem;
  `}
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
  margin: 3.9rem 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 2.9rem;
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.richBlack};
  font-size: 1.7rem;
  font-style: italic;
  font-weight: 400;

  ${mediaMaxWidth('desktop1024')`
    font-size: 1.4rem;
  `}

  ${mediaMaxWidth('tablet')`
    width: 100%;
  `}
`;

export const Icon = styled(LazyImage)`
  width: 2.4rem;

  ${mediaMaxWidth('tablet')`
    width: 1.2rem;
  `}
`;

export const Btn = styled(Button)`
  background: ${({ theme }) => theme.whats};
  padding: 1.7rem 2.6rem;

  ${Text} {
    font-size: 1.6rem;
    font-weight: 700;
  }

  ${mediaMaxWidth('tablet')`
    
  `}
`;
