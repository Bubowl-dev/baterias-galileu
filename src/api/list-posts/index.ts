import api from '..';
import ListPostsResponse from './response';
import services from '@/services';

const listPosts = async () => {
  try {
    const { data } = await api.get('/user/posts');

    return data as ListPostsResponse[];
  } catch (error) {
    console.error(error);
    return services;
  }
};

export default listPosts;
