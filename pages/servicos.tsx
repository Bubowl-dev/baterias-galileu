import ServicesTemplate from '@/templates/Services';
import Head from 'next/head';

const Services = () => {
  return (
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
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  item: {
                    '@type': 'Service',
                    name: 'Substituição De Baterias Automotivas',
                    description:
                      'Falha em algum sistema elétrico, como luz fraca e oscilante, problemas com o sistema de injeção do combustível, com o aquecedor e ar-condicionado. Observe as luzes no painel, quando a bateria começa a ficar menos potente, uma luz acende avisando que a peça precisa ser substituída.',
                    url: 'https://www.bateriasgalileu.com.br/substituicao-de-baterias-automotivas/'
                  }
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  item: {
                    '@type': 'Service',
                    name: 'Bateria Para Caminhão: Potência E Confiabilidade Para Sua Jornada',
                    description:
                      'Assegure o desempenho contínuo do seu caminhão com a escolha adequada de bateria. Explore nossas opções para cuidados e manutenção eficazes.',
                    url: 'https://www.bateriasgalileu.com.br/bateria-para-caminhao/'
                  }
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  item: {
                    '@type': 'Service',
                    name: 'Bateria Para Carro: Energia Confiável Para Seu Dia A Dia',
                    description:
                      'Garanta a máxima eficiência do seu automóvel com a escolha correta da bateria para carro. Conheça nossas soluções para uma manutenção impecável e duradoura.',
                    url: 'https://www.bateriasgalileu.com.br/bateria-para-carro/'
                  }
                },
                {
                  '@type': 'ListItem',
                  position: 4,
                  item: {
                    '@type': 'Service',
                    name: 'Moto Parada: Maior Risco De Descarregar A Bateria',
                    description:
                      'Descubra como evitar o descarregamento da bateria em motos que permanecem paradas por períodos prolongados.',
                    url: 'https://www.bateriasgalileu.com.br/moto-parada-risco-descarregar-bateria/'
                  }
                },
                {
                  '@type': 'ListItem',
                  position: 5,
                  item: {
                    '@type': 'Service',
                    name: 'A Melhor Bateria De Carro',
                    description:
                      'Se você tem um carro com motor 1.0 a 1.8, o recomendável são os modelos de 45 Ah ou 50 ah....',
                    url: 'https://www.bateriasgalileu.com.br/melhor-bateria-de-carro/'
                  }
                }
              ]
            })
          }}
        />
      </Head>

      <ServicesTemplate />
    </>
  );
};

export default Services;
