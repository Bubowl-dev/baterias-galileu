import { ResponsiveElement } from "@/utils/responsive-element";
import C from "./const";
import * as S from "./styles";
import AboutMobile from "./mobile";
import AboutDesktop from "./desktop";

const About = () => {
  return (
    <S.About id="sobre-nos">
      <S.Wrapper>
        <S.InfoSection>
          <S.Title>{C.title}</S.Title>
          <S.Description>{C.content}</S.Description>
        </S.InfoSection>
        <S.Owner>
          <ResponsiveElement
            breakpoints={{ tablet: <AboutMobile /> }}
            content={<AboutDesktop />}
          />
          <S.ContentOwner>
            <S.Icon {...C.mensage.icon} />
            <S.Text>{C.mensage.text}</S.Text>
            <S.TitleOwner>- {C.mensage.name}</S.TitleOwner>
          </S.ContentOwner>
        </S.Owner>
      </S.Wrapper>
    </S.About>
  );
};
export default About;
