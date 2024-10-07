import { FC } from 'react';
import * as S from './styles';
import WriterProps from './props';
import { IconTime } from '@/components/atoms/Svg';
import ShareButton from '@/components/atoms/Share';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  date.setFullYear(date.getFullYear() - 1);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

const Writer: FC<WriterProps> = ({ timer, name, img, date }) => {
  return (
    <S.WriterContainer>
      <S.User>
        <S.Img {...img} />
        <S.Text>
          <S.Name>{name}</S.Name>
          <S.PublishedAt>Publicado em: {formatDate(date)}</S.PublishedAt>
        </S.Text>
      </S.User>
      <S.Timer>
        <IconTime />
        {timer} min de leitura
      </S.Timer>
      <S.Share>
        <S.ShareText>Compartilhe:</S.ShareText>
        <ShareButton />
      </S.Share>
    </S.WriterContainer>
  );
};

export default Writer;
