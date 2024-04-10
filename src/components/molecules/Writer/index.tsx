import { FC } from 'react';
import * as S from './styles';
import WriterProps from './props';
import { IconTime } from '@/components/atoms/Svg';
import ShareButton from '@/components/atoms/Share';

const Writer: FC<WriterProps> = ({ timer, name, img, date }) => {
  return (
    <S.WriterContainer>
      <S.User>
        <S.Img {...img} />
        <S.Text>
          <S.Name>{name}</S.Name>
          <S.PublishedAt>Publicado em: {date}</S.PublishedAt>
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
