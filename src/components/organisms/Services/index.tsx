import { Main } from "@/styles/components/Main";
import services from "@/services";
import WhyChoose from "@/components/organisms/WhyChoose";
import About from "@/components/organisms/About";
import Posts from "@/components/molecules/Posts";

import C from "./const";
import TitlePage from "@/components/atoms/TitlePage";

const ServicesTemplate = () => {
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
