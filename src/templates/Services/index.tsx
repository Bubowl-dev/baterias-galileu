import { Main } from '@/styles/components/Main';
import WhyChoose from '@/components/organisms/WhyChoose';
import About from '@/components/organisms/About';

import C from './const';
import ServicesPost from '@/components/organisms/ServicesPost';
import { FC } from 'react';
import ServiceProps from './props';

const ServicesTemplate: FC<{ services: ServiceProps[] }> = ({ services }) => {
  return (
    <Main>
      <ServicesPost title={C.title} description={C.description} posts={services} />
      <WhyChoose />
      <About />
    </Main>
  );
};

export default ServicesTemplate;
