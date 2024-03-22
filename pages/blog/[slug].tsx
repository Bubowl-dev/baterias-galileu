import BlogContent from '@/templates/BlogContent';
import Head from 'next/head';
import { GetStaticPaths } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import listPosts from '@/api/list-posts';
import { FC } from 'react';
import SlugProps from '@/utils/props';

const Content: FC<SlugProps> = ({ json: { title, text, link, schema, content, img }, ...props }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={text} />
      <link rel="canonical" href={`${process.env.NEXT_PUBLIC_API_URL}/blog/${link}/`} />
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_API_URL}/blog/${link}/`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={text} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${process.env.NEXT_PUBLIC_API_URL}/imgs/logo.png`} />
      {schema &&
        schema.length &&
        schema.map((schema: string, index: number) => (
          <script
            key={index}
            id="schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      <script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org/", 
              "@type": "Product", 
              "name": "Instalação e Manutenção De Baterias",
              "image": "http://localhost:3000/imgs/logo.png",
              "description": "Na Casa das Baterias Galileu, não nos limitamos à venda de baterias; oferecemos um serviço completo que inclui instalação e manutenção profissional. Nossa equipe é composta por técnicos altamente qualificados, treinados para lidar com uma variedade de necessidades de bateria de veículos. Eles são especialistas em diagnosticar problemas, instalar novas baterias e realizar manutenção para garantir o desempenho ótimo e a longevidade da sua bateria.",
              "brand": {
                "@type": "Brand",
                "name": "Baterias Galileu"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "1",
                "ratingCount": "3",
                "reviewCount": "3"
              },
              "review": [{
                "@type": "Review",
                "name": "Sem dúvida um dos melhores lugares para comprar baterias",
                "reviewBody": "Sem dúvida um dos melhores lugares para comprar baterias aqui na região de Vila Guilherme, Vila Maria e Parque Novo Mundo. Atendimento nota 10. Infelizmente não era bateria era o alternador.
            Falei que era Bucha........",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "datePublished": "2023-08-01",
                "author": {"@type": "Person", "name": "Decio De Freitas Dias"},
                "publisher": {"@type": "Organization", "name": "Decio De Freitas Dias"}
              },{
                "@type": "Review",
                "name": "Bom atendimento",
                "reviewBody": "Bom atendimento, rapidez nas entregas e compromisso com o cliente.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "datePublished": "2023-08-02",
                "author": {"@type": "Person", "name": "Rodney Lira"},
                "publisher": {"@type": "Organization", "name": "Rodney Lira"}
              },{
                "@type": "Review",
                "name": "Ótimo atendimento, ótimos preços. Honestidade e confiança",
                "reviewBody": "Ótimo atendimento, ótimos preços. Honestidade e confiança. Sou cliente há mais de 12 anos.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "datePublished": "2023-09-13",
                "author": {"@type": "Person", "name": "Wanderlei"},
                "publisher": {"@type": "Organization", "name": "Wanderlei"}
              }]
            }
      `
        }}
      />
    </Head>
    <BlogContent content={content} img={img} title={title} services={props.data} />
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await listPosts();
  if (!data?.length) return { paths: [], fallback: false };

  const paths = data.map(({ json }) => ({
    params: { slug: json.link }
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: Params }) => {
  const data = await listPosts();
  if (!data?.length) return { props: {} };

  const select = data.find(({ json }) => json.link === params.slug);
  return { props: { ...select, data } };
};

export default Content;
