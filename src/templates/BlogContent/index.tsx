import { Main } from '@/styles/components/Main';
import services from '@/services';
import ServicesPost from '@/components/organisms/ServicesPost';
import C from './const';
import * as S from './styles';
import Reviews from '@/components/organisms/Reviews';
import Writer from '@/components/molecules/Writer';
import Content from '@/components/atoms/Content';
import Comments from '@/components/molecules/Comments';
import comments from './comments';
import SendComments from '@/components/atoms/SendComment';

const BlogContent = ({ content, questions, date }: any) => {
  console.log(date);

  return (
    <Main>
      <S.Content>
        <S.Wrapper>
          <S.ModalZap>
            <S.Zap>
              <S.TextModal>{C.zap.text}</S.TextModal>
              <S.Btn icon={C.zap.icon} {...C.zap.button} />
            </S.Zap>
          </S.ModalZap>
          <S.Article>
            <Writer timer={C.timer} name={C.name} img={C.img} date={date} />
            <Content content={content} />
            <S.BateriasContent>{C.about}</S.BateriasContent>
            <Comments comments={questions} />
            <SendComments />
          </S.Article>
        </S.Wrapper>
      </S.Content>
      <ServicesPost title={C.title} subTitle={true} description={C.description} posts={services} />
      <Reviews />
    </Main>
  );
};

export default BlogContent;
