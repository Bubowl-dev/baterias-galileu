import { useState } from 'react';
import { IconSend } from '../Svg';
import * as S from './styles';

const SendComments = () => {
  const [send, setSend] = useState(false);

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const comment = formData.get('comment') as string;

    if (name && comment) {
      setSend(true);

      form.reset();

      setTimeout(() => {
        setSend(false);
      }, 2000);
    }
  };

  return (
    <S.SendCommentContainer>
      <S.Title>
        <IconSend /> Deixe um comentário
      </S.Title>

      <S.Form onSubmit={handleClick}>
        <S.Label htmlFor="name">
          <S.Input type="text" id="name" name="name" placeholder="Nome" />
        </S.Label>

        <S.Label htmlFor="comment">
          <S.Textarea id="comment" name="comment" placeholder="Comentárioo.............." />
        </S.Label>

        <S.Button type="submit">Enviar</S.Button>

        <S.Success show={send}>Comentário enviado com sucesso!</S.Success>
      </S.Form>
    </S.SendCommentContainer>
  );
};

export default SendComments;
