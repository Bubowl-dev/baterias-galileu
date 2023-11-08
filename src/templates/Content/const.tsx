/* eslint-disable import/no-anonymous-default-export */
import { CustomBr } from "@/utils/custom-br";
import Data from "@/global/";

export default {
  title: "Outros Serviços",
  description: (
    <>
      Fazemos gratuitamente o teste do alternador do{" "}
      <CustomBr byViewport="desktop" /> seu veículo além do conserto de baterias
      em geral
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
      height: 20,
    },
    button: {
      text: "Clique aqui",
      href: Data.socialShare.whats.href,
      target: true,
    },
  },
};
