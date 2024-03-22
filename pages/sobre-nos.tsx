import AboutUsTemplate from '@/templates/AboutUs';
import Head from 'next/head';
import services from '@/services';

const AboutUs = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Saiba mais sobre Baterias Galileu</title>
        <meta name="description" content="Saiba um pouco mais sobre a historia de Baterias Galileu" />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_API_URL}/sobre-nos`} />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_API_URL}/sobre-nos`} />
        <meta property="og:title" content="Saiba mais sobre Baterias Galileu" />
        <meta property="og:description" content="Saiba um pouco mais sobre a historia de Baterias Galileu" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_API_URL}/imgs/logo.png`} />
        <meta property="twitter:title" content="Saiba mais sobre Baterias Galileu" />
        <meta property="twitter:description" content="Saiba um pouco mais sobre a historia de Baterias Galileu" />
        <script
          id="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Carrossel de Serviços Galileu",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "url": "https://www.bateriasgalileu.com.br/substituicao-de-baterias-automotivas/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "url": "https://www.bateriasgalileu.com.br/bateria-para-caminhao/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "url": "https://www.bateriasgalileu.com.br/bateria-para-carro/"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "url": "https://www.bateriasgalileu.com.br/moto-parada-risco-descarregar-bateria/"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "url": "https://www.bateriasgalileu.com.br/melhor-bateria-de-carro/"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "url": "https://www.bateriasgalileu.com.br/sinais-bateria-fim-guia-essencial/"
                },
                {
                  "@type": "ListItem",
                  "position": 7,
                  "url": "https://www.bateriasgalileu.com.br/carro-nao-liga-o-que-pode-ser-e-como-resolver/"
                }
              ]
            }
            `
          }}
        />
      </Head>

      <AboutUsTemplate services={data} />
    </>
  );
};

export async function getStaticProps() {
  const data = services.splice(0, 6);
  return {
    props: {
      data
    }
  };
}

export default AboutUs;
