import * as S from "./styles";
import C from "./const";
import Data from "@/global";
import useAnimation from './animations'

const Footer = () => {
  const {lines} = useAnimation()
  return (
    <S.Footer>
      <S.Content>
        <S.About>
          <S.Wrapper>
            <S.Title>
              <S.Img {...C.img} />
              <S.TitleAbout>{C.title}</S.TitleAbout>
            </S.Title>
            <S.Nav />
          </S.Wrapper>
        </S.About>
        <S.Info>
          <S.Wrapper>
            <S.ColInfo>
              <S.Icon {...Data.phone.icon} />
              <S.InfoContent>
                <S.TitleInfo>{Data.phone.title}</S.TitleInfo>
                <S.List>
                  {Data.phone.numbers.map((tel, index) => (
                    <S.Item key={index} ref={el => (lines.current[index] = el)}>
                      <S.linkTel
                        href={`tel:+55${tel.replace(" ", "").replace("-", "")}`}
                      >
                        {tel}
                      </S.linkTel>
                    </S.Item>
                  ))}
                </S.List>
              </S.InfoContent>
            </S.ColInfo>
            <S.ColInfo>
              <S.Icon {...Data.address.icon} />
              <S.InfoContent>
                <S.TitleInfo>{Data.address.title}</S.TitleInfo>
                <S.Address>{Data.address.text}</S.Address>
              </S.InfoContent>
            </S.ColInfo>
            <S.ColInfo>
              <S.Icon {...Data.time.icon} />
              <S.InfoContent>
                <S.TitleInfo>{Data.time.title}</S.TitleInfo>
                <S.List>
                  {Data.time.time.map((tel, index) => (
                    <S.Item key={index}>
                      <S.linkTel
                        href={`tel:+55${tel.replace(" ", "").replace("-", "")}`}
                      >
                        {tel}
                      </S.linkTel>
                    </S.Item>
                  ))}
                </S.List>
              </S.InfoContent>
            </S.ColInfo>
          </S.Wrapper>
        </S.Info>
        <S.Where>
          <S.Wrapper>
            <S.WhereSocialShare>
              <S.Imgs>
                {C.imgs.map((img, index) => (
                  <S.Img key={index} {...img} />
                ))}
              </S.Imgs>
              <S.WhereContent>
                <S.WhereTitle>{C.titleShare}</S.WhereTitle>
                <S.linkInsta
                  href={Data.socialShare.insta.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  {Data.socialShare.insta.name}
                </S.linkInsta>
                <S.SocialShare>
                  <S.linkInsta
                    href={Data.socialShare.insta.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <S.IconWhere {...Data.socialShare.insta.icon} />
                  </S.linkInsta>
                  <S.linkInsta
                    href={Data.socialShare.face.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <S.IconWhere {...Data.socialShare.face.icon} />
                  </S.linkInsta>
                  <S.linkInsta
                    href={Data.socialShare.whats.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <S.IconWhere {...Data.socialShare.whats.icon} />
                  </S.linkInsta>
                </S.SocialShare>
              </S.WhereContent>
            </S.WhereSocialShare>
            <S.Bubowl>
              <S.ContentBubowl>
                {C.bubowl.copy}
                <S.line>{` - `}</S.line>
                <S.LinkBubowl href={C.bubowl.link} target="_blank">
                  {C.bubowl.text}
                  <S.ImgBubowl {...C.bubowl.img} />
                </S.LinkBubowl>
              </S.ContentBubowl>
            </S.Bubowl>
          </S.Wrapper>
        </S.Where>
      </S.Content>
      <S.Background />
    </S.Footer>
  );
};
export default Footer;
