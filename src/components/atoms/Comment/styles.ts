import { styled } from 'styled-components';

export const CommentContainer = styled.li`
  border-top: 0.1rem solid ${({ theme }) => theme.ateneoBlue};
  padding: 2rem 1rem;
`;

export const User = styled.div``;

export const Name = styled.p`
  font-weight: bold;
  line-height: 2rem;
  font-size: 1.6rem;
`;

export const PublishedAt = styled.p`
  font-size: 1.2rem;
  line-height: 1.6rem;
`;

export const Comment = styled.p`
  margin-top: 1rem;
  font-size: 1.6rem;
`;
