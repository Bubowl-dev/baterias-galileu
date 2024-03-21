import { FC } from 'react';
import * as S from './styles';
import PostsProps from './props';
import BlogCard from '@/components/atoms/BlogCard';

const PostsBlog: FC<PostsProps> = ({ posts }) => {
  return <S.Posts>{posts.length && posts.map(({ json }, index) => <BlogCard key={index} {...json} />)}</S.Posts>;
};
export default PostsBlog;
