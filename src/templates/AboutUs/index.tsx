import { Wrapper } from '@/styles/components/Main';
import About from '@/components/organisms/About';
import Reviews from '@/components/organisms/Reviews';
import ServicesPost from '@/components/organisms/ServicesPost';
import C from './const';
import { FC } from 'react';
import AboutUsProps from './props';

const AboutUsTemplate: FC<{ services: AboutUsProps[] }> = ({ services }) => {
  return (
    <Wrapper>
      <About />
      <Reviews />
      <ServicesPost title={C.title} subTitle={true} description={C.description} posts={services} />
    </Wrapper>
  );
};

export default AboutUsTemplate;
