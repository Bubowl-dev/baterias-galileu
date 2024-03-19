import { Main } from '@/styles/components/Main';
import WhyChoose from '@/components/organisms/WhyChoose';
import About from '@/components/organisms/About';

import C from './const';
import ServicesPost from '@/components/organisms/ServicesPost';
import { FC } from 'react';
import ListPostsResponse from '@/api/list-posts/response';

const ServicesTemplate: FC<{ services: ListPostsResponse[] }> = ({ services }) => {
  return (
    <Main>
      <ServicesPost title={C.title} description={C.description} posts={services} />
      <WhyChoose />
      <About />
    </Main>
  );
};

export default ServicesTemplate;
