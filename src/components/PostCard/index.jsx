import { Post, PostContent } from './styles';

import { Link } from 'react-router-dom';

export const PostCard = ({ cover, title, name }) => {
  return (
    <Link to="/postscomments/">
      <Post>
        <img src={cover} />
        <PostContent>
          <h2>{title}</h2>
          <h3>Autor: {name}</h3>
        </PostContent>
      </Post>
    </Link>
  );
};
