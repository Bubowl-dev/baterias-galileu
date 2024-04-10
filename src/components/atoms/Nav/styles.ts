import Link from 'next/link';
import { styled } from 'styled-components';

export const Nav = styled.nav``;

export const Menu = styled.ul`
  display: flex;
  gap: 2.4rem;
`;

export const Item = styled.li``;

export const IconItem = styled.li``;

export const ItemLink = styled(Link)`
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.ateneoBlue};
  transition: font-weight 0.4s ease;

  &:hover {
    font-weight: 700;
  }
`;
