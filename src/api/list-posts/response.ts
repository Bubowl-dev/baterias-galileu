export default interface ListPostsResponse {
  id: string;
  title: string;
  json: {
    title: string;
    text: string;
    link: string;
    schema: any[];
    img: string;
    'img-prompt': string;
    content: string;
  };
  img: string;
}
