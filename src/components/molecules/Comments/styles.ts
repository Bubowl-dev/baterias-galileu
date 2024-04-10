import { styled } from 'styled-components';

export const CommentsContainer = styled.div`
  border: 0.1rem solid ${({ theme }) => theme.ateneoBlue};
  border-radius: 0.8rem;
  padding: 2rem;
  margin-top: 4rem;
`;

export const TotalComments = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.4rem;
`;

export const AllComments = styled.ul`
  padding-top: 2rem;
`;
