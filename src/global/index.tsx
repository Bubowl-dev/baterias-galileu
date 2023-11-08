/* eslint-disable import/no-anonymous-default-export */
export default {
  phone: {
    title: "Telefones",
    icon: {
      src: "./svgs/phone.svg",
      alt: "Icone de telefone",
      width: 29,
      height: 29,
    },
    numbers: [
      "11 2954-0637",
      "11 94456-9970",
      "11 94750-6988",
      "11 94004-2147",
      "11 98670-5362",
    ],
  },
  address: {
    title: "Endereço",
    icon: {
      src: "./svgs/location.svg",
      alt: "Icone de localição",
      width: 29,
      height: 29,
    },
    text: (
      <p>
        Rua Galileu Gaia, 609 - <br /> Vila Maria São Paulo, SP
      </p>
    ),
  },
  time: {
    title: "Nossos horários",
    icon: {
      src: "./svgs/time.svg",
      alt: "Icone para representar os horarios de funcionamento",
      width: 29,
      height: 29,
    },
    time: ["9:00 - 19:00 s eg a sex", "9:00 - 14:00 sáb"],
  },
  socialShare: {
    insta: {
      href: "",
      name: "@Galileu_baterias",
      icon: {
        src: "./svgs/insta-footer.svg",
        alt: "Icone para representar os horarios de funcionamento",
        width: 23,
        height: 23,
      },
    },
    face: {
      href: "",
      name: "@Galileu_baterias",
      icon: {
        src: "./svgs/face-footer.svg",
        alt: "Icone para representar os horarios de funcionamento",
        width: 23,
        height: 23,
      },
    },
    whats: {
      href: `https://api.whatsapp.com/send/?phone=${"5511944569970"}&text&type=phone_number&app_absent=0`,
      name: "Baterias Galileu",
      icon: {
        src: "./svgs/whats-footer.svg",
        alt: "Icone para representar os horarios de funcionamento",
        width: 22.9,
        height: 23,
      },
    },
  },
  bubowl: "Desenvolvido por Bubowl 2023",
};
