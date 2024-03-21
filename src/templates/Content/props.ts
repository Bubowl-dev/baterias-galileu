import ListPostsResponse from '@/api/list-posts/response';

export default interface ContentProps {
  content: string;
  services: {
    title: string;
    text: string;
    link: string;
    img: string;
    schema: any[];
    content: string;
  }[];
}
