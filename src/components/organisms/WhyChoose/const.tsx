/* eslint-disable import/no-anonymous-default-export */
import Data from "@/global/";

export default {
  title: "Por que nos escolher?",
  list: {
    icon: {
      src: "./svgs/container.svg",
      alt: "Icone de correto mostrando o porque de escolher a Baterias Galileu",
      width: 24,
      height: 24,
    },
    item: [
      "Satisfação garantida",
      "Atendimento único",
      "Transparência com o cliente",
      "Comprometimento",
    ],
  },
  button: {
    text: "Preciso de ajuda",
    href: Data.socialShare.whats.href,
    target: true,
  },
  background: {
    src: "./imgs/choose.png",
    alt: "Trocando a Bateria de um caminhão!",
    width: 682,
    height: 363,
  },
};
