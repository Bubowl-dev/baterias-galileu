import { Main } from '@/styles/components/Main';
import WhyChoose from '@/components/organisms/WhyChoose';
import About from '@/components/organisms/About';
import Posts from '@/components/molecules/Posts';

import C from './const';
import TitlePage from '@/components/atoms/TitlePage';
import { FC } from 'react';
import ListPostsResponse from '@/api/list-posts/response';

const ServicesTemplate: FC<{ services: ListPostsResponse[] }> = ({ services }) => {
  return (
    <Main>
      <TitlePage title={C.title} description={C.description} />
      <Posts posts={services} />
      <WhyChoose />
      <About />
    </Main>
  );
};

export default ServicesTemplate;
