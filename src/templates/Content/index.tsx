import { Main } from '@/styles/components/Main';
import services from '@/services';
import ServicesPost from '@/components/organisms/ServicesPost';
import C from './const';
import * as S from './styles';
import Reviews from '@/components/organisms/Reviews';
import { FC } from 'react';
import ContentProps from './props';

const ContentTemplate: FC<ContentProps> = ({ content, services }) => (
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
          <div dangerouslySetInnerHTML={{ __html: content }} />
          {C.about}
        </S.Article>
      </S.Wrapper>
    </S.Content>
    <ServicesPost title={C.title} subTitle={true} description={C.description} posts={services} />
    <Reviews />
  </Main>
);

export default ContentTemplate;
