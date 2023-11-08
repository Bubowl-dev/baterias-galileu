import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import services from "@/services";
import ContentTemplate from "@/templates/Content";
import CardProps from "@/components/atoms/Card/props";

const Content = () => {
  const [service, setService] = useState({});
  const {
    query: { slug: post },
  } = useRouter();

  useEffect(() => {
    const select = services.filter((i) => i.link === post);
    setService(select[0]);
  }, [post]);
  return <ContentTemplate {...service} />;
};
export default Content;
