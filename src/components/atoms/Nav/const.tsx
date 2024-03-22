import { IconHome } from '@/components/atoms/Svg';

/* eslint-disable import/no-anonymous-default-export */
export default {
  menu: [
    {
      page: 'Sobre nós',
      link: '/sobre-nos',
      children: []
    },
    {
      page: 'Serviços',
      link: '/servicos',
      children: []
    },
    {
      page: 'Blog',
      link: '/blog',
      children: []
    }
  ],

  mobile: {
    link: {
      title: 'Botão Home',
      href: `${process.env.NEXT_PUBLIC_API_URL}/`
    },
    icon: IconHome
  }
};
