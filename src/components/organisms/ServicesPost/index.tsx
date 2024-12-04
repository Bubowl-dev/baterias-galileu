import Posts from "@/components/molecules/Posts";
import * as S from "./styles";
import { FC } from "react";
import ServicePostProps from "./props";

const ServicesPost: FC<ServicePostProps> = ({ title, description, posts, subTitle }) => {
  return (
    <S.Section>
      <S.Title title={title} description={description} subTitle={subTitle} />
      <Posts posts={posts} />
    </S.Section>
  );
};

export default ServicesPost;
