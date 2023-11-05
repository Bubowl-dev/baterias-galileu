import HomeTemplate from "@/templates/Home";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>teestando</title>
        <meta name="description" content="testando" />
      </Head>

      <HomeTemplate />
    </>
  );
};

export default Home;
