import { FC } from 'react';
import * as S from './styles';
import { CommentProps } from './props';

const Comment: FC<CommentProps> = ({ asked_by, question, answered_by, answer }) => {
  return (
    <S.CommentContainer>
      <S.User>
        <S.Name>{asked_by}</S.Name>
      </S.User>
      <S.Comment>{question}</S.Comment>
      <S.Answered>
        <S.User>
          <S.Name>{answered_by}</S.Name>
        </S.User>
        <S.Comment>{answer}</S.Comment>
      </S.Answered>
    </S.CommentContainer>
  );
};

export default Comment;
