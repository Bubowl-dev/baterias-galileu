import * as S from './styles';
import { FC } from 'react';
import ServicePostProps from './props';
import PostsBlog from '@/components/molecules/Blog';

const BlogPost: FC<ServicePostProps> = ({ title, description, posts, subTitle }) => {
  return (
    <S.Section>
      <S.Title title={title} description={description} subTitle={subTitle} />
      <PostsBlog posts={posts} />
    </S.Section>
  );
};

export default BlogPost;
