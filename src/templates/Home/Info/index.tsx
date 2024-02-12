import * as S from './styles';
import C from './const';
import { ResponsiveElement } from '@/utils/responsive-element';
import useAnimation from './animation';
import InfoDesktop from './desktop';
import InfoMobile from './mobile';

const Info = () => {
  const { sectionRef, content, contentData } = useAnimation();

  return (
    <S.Info ref={sectionRef}>
      <ResponsiveElement
        breakpoints={{
          mobile: <InfoMobile />
        }}
        content={<InfoDesktop />}
      />
      <S.Data ref={contentData}>
        {C.data.map(({ icon, text }, index) => (
          <S.ContentDescription key={index} ref={i => i && (content.current[index] = i)}>
            <S.Icone {...icon} />
            {text}
          </S.ContentDescription>
        ))}
      </S.Data>
    </S.Info>
  );
};
export default Info;
