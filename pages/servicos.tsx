import ServicesTemplate from "@/templates/Services";
import Head from "next/head";

const Services = () => {
  return (
    <>
      <Head>
        <title>Que tipo de serviço está procurando hoje?</title>
        <meta
          name="description"
          content="Encontre o serviço que precisar aqui na Baterias Galileu"
        />
      </Head>

      <ServicesTemplate />
    </>
  );
};

export default Services;
