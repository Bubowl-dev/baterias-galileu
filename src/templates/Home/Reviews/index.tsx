import * as S from "./styles";
import C from "./const";
import Assessment from "@/global/reviews";

const Reviews = () => {
  return (
    <S.Reviews>
      <S.Wrapper>
        <S.Content>
          <S.Title>{C.title}</S.Title>
          <S.Description>{C.description}</S.Description>
        </S.Content>
        <S.Comments>
          {Assessment.map((i, index) => (
            <S.Review key={index}>
              <S.Info>
                <S.Profile {...i.img} />
                <S.User>
                  <S.Name
                    href={i.link}
                    title={i.name}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    {i.name}
                  </S.Name>
                  <S.Stars />
                </S.User>
              </S.Info>
              <S.Mensage>{i.mensage}</S.Mensage>
            </S.Review>
          ))}
        </S.Comments>
      </S.Wrapper>
    </S.Reviews>
  );
};
export default Reviews;
