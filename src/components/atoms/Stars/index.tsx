import * as S from "./styles";
import C from "./const";
import { useMemo } from "react";

const Stars = () => {
  const renderImages = useMemo(() => {
    const imageArray = [];

    for (let i = 0; i < 5; i++) {
      imageArray.push(
        <S.Star key={i} src={C.src} width={18} height={18} alt={C.alt} />
      );
    }

    return imageArray;
  }, []);
  return <S.Stars>{renderImages}</S.Stars>;
};
export default Stars;
