import HomeTemplate from "@/templates/Home";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Instalação e Manutenção De Baterias</title>
        <meta
          name="description"
          content="Aqui você confere a instalação e Manutenção De Baterias automotivas para carros e caminhões!!"
        />
      </Head>

      <HomeTemplate />
    </>
  );
};

export default Home;
