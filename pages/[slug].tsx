import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import services from '@/services';
import ContentTemplate from '@/templates/Content';
import Head from 'next/head';

const Content = () => {
  const [service, setService] = useState({ title: '', text: '', link: '' });
  const { query: { slug: post } } = useRouter();

  useEffect(() => {
    const select = services.find(i => i.link === post);
    if (select) {
      setService(select);
    }
  }, [post]);

  return (
    <>
      <Head>
        <title>{service.title}</title>
        <meta
          name="description"
          content={service.text}
        />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_API_URL}/${service.link}/`} />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_API_URL}/${service.link}/`} />
        <meta property="og:title" content={service.title} />
        <meta property="og:description" content={service.text} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_API_URL}/imgs/logo.png`} />
      </Head>
      <ContentTemplate {...service} />
    </>
  );
};

export default Content;
