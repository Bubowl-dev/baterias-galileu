import { FC } from 'react';
import * as S from './styles';
import CardProps from './props';

const BlogCard: FC<CardProps> = ({ title, text, link, img }) => {
  return (
    <S.Card>
      <S.CardLink href={`/blog/${link}`} title={text}>
        <S.Img src={img.includes('/posts') ? img : `/posts/${img}`} alt={title} width={335} height={246} />
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
      </S.CardLink>
    </S.Card>
  );
};
export default BlogCard;
