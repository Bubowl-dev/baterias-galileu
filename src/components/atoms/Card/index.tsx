import { FC } from 'react';
import * as S from './styles';
import CardProps from './props';

const Card: FC<CardProps> = ({ title, text, link, img }) => {
  return (
    <S.Card>
      <S.CardLink href={link} title={text}>
        <S.Img src={img.includes('/posts') ? img : `/posts/${img}`} alt={title} width={335} height={246} />
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
      </S.CardLink>
    </S.Card>
  );
};
export default Card;
