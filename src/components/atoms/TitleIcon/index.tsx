import { FC } from "react";
import TitleIconProps from "./props";
import * as S from "./styles";

const TitleIcon: FC<TitleIconProps> = ({ children, className }) => (
  <S.TitleIcon className={className}>{children}</S.TitleIcon>
);

export default TitleIcon;
