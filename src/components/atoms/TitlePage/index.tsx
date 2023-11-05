import { FC } from "react";
import * as S from "./styles";
import TitlePageProps from "./props";

const TitlePage: FC<TitlePageProps> = ({ title, description, className }) => {
  return (
    <S.TitlePage className={className}>
      {title && <S.Title>{title}</S.Title>}
      {description && <S.Text>{description}</S.Text>}
    </S.TitlePage>
  );
};
export default TitlePage;
