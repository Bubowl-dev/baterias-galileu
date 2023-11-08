import { FC } from "react";
import C from "./const";
import * as S from "./styles";

const Logo: FC<{ className?: string }> = ({ className }) => {
  return (
    <S.Logo className={className} href="/">
      <S.Img
        height={C.logo.height}
        width={C.logo.width}
        src={C.logo.src}
        alt={C.logo.alt}
      />
    </S.Logo>
  );
};

export default Logo;
