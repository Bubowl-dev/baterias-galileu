import * as S from "./styles";
import C from "./const";
import Stars from "@/components/atoms/Stars";

const ReviewsTotal = () => {
  return (
    <S.ReviewsTotal>
      <S.Peoples>
        {C.peoples.map(({ src, alt }, index) => (
          <S.PeoplesImg key={index} src={src} alt={alt} />
        ))}
      </S.Peoples>
      <S.InfoReviews>
        <S.TitleReviews>{C.totalReviews}</S.TitleReviews>
        <Stars />
      </S.InfoReviews>
    </S.ReviewsTotal>
  );
};
export default ReviewsTotal;
