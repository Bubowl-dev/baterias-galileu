import * as S from "./styles";
import C from './const'

const Header = () => {
  return (
    <S.Header>
      <S.Logo />
      <S.Nav />
      <S.Btn text={C.button.text} href={C.button.link} target={C.button.target} icon={C.icon} />
    </S.Header>
  );
};

export default Header;
