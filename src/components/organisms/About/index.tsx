import { ResponsiveElement } from '@/utils/responsive-element';
import C from './const';
import * as S from './styles';
import AboutMobile from './mobile';
import AboutDesktop from './desktop';
import Animation from '@/components/atoms/Animation';

const About = () => {
  const { sectionRef } = Animation();

  return (
    <S.About id="sobre-nos" ref={sectionRef}>
      <S.Wrapper>
        <S.InfoSection>
          <S.Title>{C.title}</S.Title>
          <S.Description>{C.content}</S.Description>
        </S.InfoSection>
        <S.Owner>
          <ResponsiveElement breakpoints={{ tablet: <AboutMobile /> }} content={<AboutDesktop />} />
          <S.ContentOwner>
            <S.Icon {...C.mensage.icon} />
            <S.Text>{C.mensage.text}</S.Text>
          </S.ContentOwner>
        </S.Owner>
      </S.Wrapper>
    </S.About>
  );
};
export default About;
