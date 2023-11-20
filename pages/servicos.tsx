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
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_API_URL}/servicos/`} />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_API_URL}/`} />
        <meta property="og:title" content="Que tipo de serviço está procurando hoje?" />
        <meta property="og:description" content="Encontre o serviço que precisar aqui na Baterias Galileu" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_API_URL}/imgs/logo.png`} />
      </Head>

      <ServicesTemplate />
    </>
  );
};

export default Services;
