/* eslint-disable import/no-anonymous-default-export */
import { CustomBr } from '@/utils/custom-br';
import Data from '@/global/';

export default {
  title: 'Outros Serviços',
  description: (
    <>
      Fazemos gratuitamente o teste do alternador do <CustomBr byViewport="desktop" /> seu veículo além do conserto de
      baterias em geral
    </>
  ),

  zap: {
    text: (
      <>
        Ficou com alguma <CustomBr byViewport="desktop" /> dúvida? Fale conosco
        <CustomBr byViewport="desktop" /> agora mesmo!
      </>
    ),
    icon: {
      src: Data.socialShare.whats.icon.src,
      width: 20,
      height: 20
    },
    button: {
      name: 'Botão do whatsapp',
      text: 'Clique aqui',
      href: Data.socialShare.whats.href,
      target: true
    }
  },
  about: (
    <>
      <h3>Sobre a Baterias Galileu</h3>
      <p>
        Desde a nossa fundação em 1973, a Casa das Baterias Galileu tem sido um nome sinônimo de confiança e qualidade
        no setor de baterias. Começamos nossa jornada focados em baterias para caminhões, e hoje, temos orgulho de
        oferecer uma ampla gama de baterias de alta qualidade para diversos veículos, incluindo caminhões, ônibus,
        máquinas pesadas e carros de passeio.
      </p>
      <p>
        No mundo em constante evolução da tecnologia automotiva, entendemos a importância de manter-se à frente. Por
        isso, estamos sempre atualizando nosso portfólio com as melhores e mais recentes marcas do mercado. Mais do que
        apenas fornecedores de baterias, somos especialistas em garantir que o seu veículo tenha a energia necessária
        para funcionar no seu melhor.
      </p>
      <p>
        Na Casa das Baterias Galileu, não nos limitamos à venda de baterias; oferecemos um serviço completo que inclui
        instalação e manutenção profissional. Nossa equipe é composta por técnicos altamente qualificados, treinados
        para lidar com uma variedade de necessidades de bateria de veículos. Eles são especialistas em diagnosticar
        problemas, instalar novas baterias e realizar manutenção para garantir o desempenho ótimo e a longevidade da sua
        bateria.
      </p>
      <h4>Baterias Galileu excelência e compromisso</h4>
      <p>
        Na Casa das Baterias Galileu, nosso compromisso é com a sua satisfação. Trabalhamos incansavelmente para
        garantir que cada cliente receba o melhor serviço possível, desde a escolha da bateria certa até a instalação e
        manutenção adequadas. Convidamos você a nos visitar e experimentar o padrão Galileu de excelência.
      </p>
    </>
  )
};
