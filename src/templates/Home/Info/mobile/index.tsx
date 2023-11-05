import * as S from '../styles'
import C from '../const'

const InfoMobile = () => (
  <S.Wrapper>
  <S.Content>
    <S.Title
      title={C.content.title}
    />
    <S.Background>
      <S.Float>
        <S.ButtonInfo
          href={C.buttonReview.href}
          text={C.buttonReview.text}
          icon={C.buttonReview.icon}
          target={C.buttonReview.target}
          onClick={C.buttonReview.event}
        />
        <S.Reviews />
      </S.Float>
      <S.Img {...C.img} />
    </S.Background>
    <S.Title
      description={C.content.description}
    />
    <S.ButtonZap
      text={C.button.text}
      href={C.button.link}
      target={C.button.target}
      icon={C.button.icon}
    />
  </S.Content>
</S.Wrapper>
)

export default InfoMobile