import { Main } from '@/styles/components/Main';
import WhyChoose from '@/components/organisms/WhyChoose';
import About from '@/components/organisms/About';

import C from './const';
import { FC } from 'react';
import ListPostsResponse from '@/api/list-posts/response';
import BlogPost from '@/components/organisms/BlogPost';

const BlogTemplate: FC<{ posts: ListPostsResponse[] }> = ({ posts }) => {
  return (
    <Main>
      <BlogPost title={C.title} description={C.description} posts={posts} />
      <WhyChoose />
      <About />
    </Main>
  );
};

export default BlogTemplate;
