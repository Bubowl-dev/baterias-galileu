import { FC } from 'react';
import * as S from './styles';
import CardProps from './props';

const BlogCard: FC<CardProps> = ({ title, text, link, img }) => {
  if (link.includes('bateriasgalileu')) {
    return <></>;
  }

  return (
    <S.Card>
      <S.CardLink href={`/blog/${link.replace('https://www.bateriasgalileu.com.br/', '/')}`} title={text}>
        <S.Img
          src={img.replace('/images/', '/').replace('https://www.bateriasgalileu.com.br/', '/')}
          alt={title}
          width={335}
          height={246}
        />
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
      </S.CardLink>
    </S.Card>
  );
};
export default BlogCard;
