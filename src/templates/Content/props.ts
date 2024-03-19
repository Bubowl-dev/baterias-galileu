import ListPostsResponse from '@/api/list-posts/response';

export default interface ContentProps {
  content: string;
  services: ListPostsResponse[];
}
