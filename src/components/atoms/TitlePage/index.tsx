import { FC } from "react";
import * as S from "./styles";
import TitlePageProps from "./props";

const TitlePage: FC<TitlePageProps> = ({ title, description, className, subTitle }) => {
  return (
    <S.TitlePage className={className}>
      {(title && !subTitle) && <S.Title>{title}</S.Title>}
      {subTitle && <S.SubTitle>{title}</S.SubTitle>}
      {description && <S.Text>{description}</S.Text>}
    </S.TitlePage>
  );
};
export default TitlePage;
