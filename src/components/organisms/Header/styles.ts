import styled from 'styled-components';
import { mediaMaxWidth, mediaMinWidth } from '@/utils/media-query';
import Button from '@/components/molecules/Button';
import _Logo from '@/components/molecules/Logo';
import _Nav from '@/components/atoms/Nav';

export const Header = styled.header`
  border-top: 0.7rem solid ${({ theme }) => theme.ateneoBlue};
  padding: 4.5rem 8.3rem 0 6rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: end;
  gap: 10rem;

  ${mediaMaxWidth('desktop1024')`
    gap: 4rem;
  `}

  ${mediaMaxWidth('mobile')`
    padding: 4.5rem 3.5rem;
    display: flex;
    justify-content: space-between;
  `}
`;

export const Logo = styled(_Logo)``;

export const Nav = styled(_Nav)`
  ${mediaMaxWidth('mobile')`
    display: none;
  `}
`;

export const Btn = styled(Button)`
  margin-left: auto;

  ${mediaMaxWidth('mobile')`
    span{
      display: none;
    }
  `}

  ${mediaMinWidth('mobile', 1)` 
    picture{
      display: none;
    }
  `}
`;
