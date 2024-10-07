import api from '..';
import ListPostsResponse from './response';

const listPosts = async () => {
  try {
    const { data } = await api.get('/user/posts');

    return data as ListPostsResponse[];
  } catch (error) {
    console.error(error);
  }
};

export default listPosts;
