import ListPostsResponse from '@/api/list-posts/response';
import { ReactNode } from 'react';

export default interface ServicePostProps {
  title: ReactNode;
  description: ReactNode;
  posts: ListPostsResponse[];
  subTitle?: boolean;
}
