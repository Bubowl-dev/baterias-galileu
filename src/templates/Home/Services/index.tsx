import * as S from "./styles";
import C from "./const";

const Services = () => {
  return (
    <S.Services>
      <S.Wrapper>
        <S.Title>{C.title}</S.Title>
        <S.Imgs>
          {C.imgs.map((img, index) => (
            <S.Img key={index} {...img} />
          ))}
        </S.Imgs>
        <S.Article>
          <S.TitleList>{C.list.title}</S.TitleList>
          <S.List>
            {C.list.items.map((i, index) => (
              <S.Item key={index}>
                <S.Icon {...C.list.icons} />
                <S.Text>{i}</S.Text>
              </S.Item>
            ))}
          </S.List>
        </S.Article>
        <S.Button {...C.button} />
      </S.Wrapper>
    </S.Services>
  );
};
export default Services;
