import listPosts from '@/api/list-posts';
import ServicesTemplate from '@/templates/Services';
import Head from 'next/head';

const Services = ({ data }: any) => (
  <>
    <Head>
      <title>Que tipo de serviço está procurando hoje?</title>
      <meta name="description" content="Encontre o serviço que precisar aqui na Baterias Galileu" />
      <link rel="canonical" href={`${process.env.NEXT_PUBLIC_API_URL}/servicos/`} />
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_API_URL}/`} />
      <meta property="og:title" content="Que tipo de serviço está procurando hoje?" />
      <meta property="og:description" content="Encontre o serviço que precisar aqui na Baterias Galileu" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${process.env.NEXT_PUBLIC_API_URL}/imgs/logo.png`} />
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

    <ServicesTemplate services={data} />
  </>
);

export async function getStaticProps() {
  const data = await listPosts();

  return {
    props: {
      data
    }
  };
}

export default Services;
