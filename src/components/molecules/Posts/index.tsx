import { FC } from 'react';
import * as S from './styles';
import PostsProps from './props';
import Card from '@/components/atoms/Card';

const Posts: FC<PostsProps> = ({ posts }) => {
  return <S.Posts>{posts.length && posts.map(({ json }, index) => <Card key={index} {...json} />)}</S.Posts>;
};
export default Posts;
