/* eslint-disable import/no-anonymous-default-export */
import Data from "@/global/";
import { CustomBr } from "@/utils/custom-br";

export default {
  content: {
    title: (
      <>
        Instalação e <br /> Manutenção <br />
        <span>De Baterias</span>
      </>
    ),
    description: (
      <>
        Fazemos gratuitamente o teste do <CustomBr byViewport={"mobile"} />
        alternador
        <CustomBr byViewport={"desktop"} /> do seu veículo, instalação e
        <CustomBr byViewport={"mobile"} />
        assistência técnica <CustomBr byViewport={"desktop"} /> na garantia.
      </>
    ),
  },
  button: {
    text: "Preciso de ajuda",
    link: Data.socialShare.whats.href,
    target: true,
    icon: {
      src: "/svgs/whatsapp.svg",
      width: 17,
      height: 17,
    },
  },

  buttonReview: {
    text: "garantia de segurança",
    href: "/",
    target: false,
    icon: {
      src: "/svgs/rain.svg",
      width: 11,
      height: 14,
    },
    event: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
  },

  img: {
    src: "/imgs/box-truck.png",
    alt: "Caminhão com bateria novinha!!",
    width: 642,
    height: 468,
  },

  data: [
    {
      icon: {
        src: "/svgs/phone-click.svg",
        alt: "Icone de telefone ",
        width: 40,
        height: 40,
      },
      text: (
        <article>
          <p>ligue agora mesmo</p>
          <a
            href={`tel:+${Data.phone.numbers[Data.phone.numbers.length - 1]
              .replaceAll(" ", "")
              .replaceAll("-", "")}`}
          >
            {Data.phone.numbers[Data.phone.numbers.length - 1]}
          </a>
        </article>
      ),
    },
    {
      icon: {
        src: "/svgs/loc-click.svg",
        alt: "Caminhão com bateria novinha!!",
        width: 40,
        height: 40,
      },
      text: Data.address.text,
    },
  ],
};
