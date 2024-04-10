import * as S from '../styles';
import C from '../const';

const AboutDesktop = () => {
  return (
    <S.Imgs>
      {C.imgs.map((img, index) => (
        <S.Img key={index} {...img} />
      ))}
    </S.Imgs>
  );
};

export default AboutDesktop;
