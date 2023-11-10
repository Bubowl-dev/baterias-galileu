import HomeTemplate from "@/templates/Home";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Instalação e Manutenção De Baterias</title>
        <meta
          name="description"
          content="Instalação e Manutenção De Baterias"
        />
      </Head>

      <HomeTemplate />
    </>
  );
};

export default Home;
