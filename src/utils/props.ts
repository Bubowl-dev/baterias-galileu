import ListPostsResponse from '@/api/list-posts/response';

export default interface JsonProps {
  title: string;
  text: string;
  link: string;
  questions: {
    answer: string;
    answered_by: string;
    asked_by: string;
    question: string;
  }[];
  schema: any[];
  img: string;
  'img-prompt': string;
  content: string;
}

export default interface SlugProps {
  id: string;
  title: string;
  json: JsonProps;
  img: string;
  data: ListPostsResponse[];
  created_at: {
    date: string;
    timezone_type: number;
    timezone: string;
  };
}
