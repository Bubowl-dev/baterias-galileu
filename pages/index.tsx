import HomeTemplate from "@/templates/Home";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Baterias Galileu - O melhor site de baterias do Brasil</title>
        <meta
          name="description"
          content="Baterias Galileu - O melhor site de baterias do Brasil"
        />
      </Head>

      <HomeTemplate />
    </>
  );
};

export default Home;
