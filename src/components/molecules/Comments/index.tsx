import { FC } from 'react';
import { CommentsProps } from './props';
import * as S from './styles';
import { IconComments } from '@/components/atoms/Svg';
import Comment from '@/components/atoms/Comment';

const Comments: FC<CommentsProps> = ({ comments }) => {
  return (
    <S.CommentsContainer>
      <S.TotalComments>
        <IconComments /> {comments.length} {comments.length > 1 ? 'Comentários' : 'Comentário'}
      </S.TotalComments>
      <S.AllComments>
        {comments.map((data, index) => (
          <Comment key={index} {...data} />
        ))}
      </S.AllComments>
    </S.CommentsContainer>
  );
};

export default Comments;
