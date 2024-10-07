import { useState } from 'react';
import C from './const';
import * as S from './styles';
import { IconCopy } from '../Svg';

const ShareButton = () => {
  const [text, setText] = useState(C.copy);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setText(C.copied);

    setTimeout(() => {
      setText(C.copy);
    }, 1000);
  };

  return (
    <S.Button onClick={handleClick}>
      {text} <IconCopy />
    </S.Button>
  );
};

export default ShareButton;
