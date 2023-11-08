/* eslint-disable import/no-anonymous-default-export */
import Data from "@/global";

export default {
  title: "O serviço ideal para você",
  imgs: [
    {
      src: "./imgs/services1.png",
      alt: "Imagem testando a Bateria",
      width: 334,
      height: 246,
    },
    {
      src: "./imgs/services2.png",
      alt: "Mecanico com ferramentas de fundo",
      width: 334,
      height: 246,
    },
    {
      src: "./imgs/services3.png",
      alt: "Carro aberto verificando o defeito da Bateria",
      width: 334,
      height: 246,
    },
  ],
  list: {
    title: "Venha fazer sua revisão gratuita",
    icons: {
      alt: "",
      src: "./svgs/check.svg",
      width: 0,
      height: 0,
    },
    items: [
      "Equipe técnica mais especializada da região",
      "Melhores preços do mercado!",
      "Orgulho de ser Galileu 💙",
    ],
  },
  btn: {
    text: "Ver todos os serviços",
  },
  button: {
    text: "Ver todos os serviços",
    href: Data.socialShare.whats.href,
    target: true,
  },
};
