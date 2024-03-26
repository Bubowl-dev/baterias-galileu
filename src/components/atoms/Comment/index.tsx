import { FC } from 'react';
import * as S from './styles';
import { CommentProps } from './props';

const Comment: FC<CommentProps> = ({ name, comment, publishedAt }) => {
  return (
    <S.CommentContainer>
      <S.User>
        <S.Name>{name}</S.Name>
        <S.PublishedAt>{publishedAt}</S.PublishedAt>
      </S.User>
      <S.Comment>{comment}</S.Comment>
    </S.CommentContainer>
  );
};

export default Comment;
