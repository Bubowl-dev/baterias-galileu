import * as S from "../styles";
import C from "../const";
import useAnimation from "../animation";
import { useRef } from "react";

const AboutMobile = () => {
  const { backgroundSecondImageRef } = useAnimation();
  const ref = useRef<HTMLImageElement>(null);

  return (
    <S.Imgs>
      {C.imgs.map((img, index) => (
        <S.Img
          key={index}
          {...img}
          ref={index === 1 ? backgroundSecondImageRef : ref}
        />
      ))}
    </S.Imgs>
  );
};

export default AboutMobile;
