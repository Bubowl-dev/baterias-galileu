import { Main } from "@/styles/components/Main";
import services from "@/services";
import WhyChoose from "@/components/organisms/WhyChoose";
import About from "@/components/organisms/About";

import C from "./const";
import ServicesPost from "@/components/organisms/ServicesPost";

const ServicesTemplate = () => {
  return (
    <Main>
      <ServicesPost
        title={C.title}
        description={C.description}
        posts={services}
      />
      <WhyChoose />
      <About />
    </Main>
  );
};

export default ServicesTemplate;
