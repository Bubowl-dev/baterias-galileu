import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import services from '@/services';
import ContentTemplate from '@/templates/Content';
import Head from 'next/head';

const Content = () => {
  const [service, setService] = useState({ title: '', text: '' });
  const { query: { slug: post } } = useRouter();

  useEffect(() => {
    const select = services.find(i => i.link === post);
    if (select) {
      setService(select);
      console.log(select)
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
      </Head>
      <ContentTemplate {...service} />
    </>
  );
};

export default Content;
