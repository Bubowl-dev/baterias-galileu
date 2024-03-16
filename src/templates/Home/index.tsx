import { Main } from '@/styles/components/Main';
import Info from './Info';
import WhyChoose from '@/components/organisms/WhyChoose';
import About from '@/components/organisms/About';
import Services from './Services';
import Reviews from '@/components/organisms/Reviews';

const HomeTemplate = () => {
  return (
    <Main>
      <Info />
      <WhyChoose />
      <About />
      <Services />
      <Reviews />
    </Main>
  );
};
export default HomeTemplate;
