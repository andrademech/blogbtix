import { Post, PostContent } from './styles';

import { Link } from 'react-router-dom';

// Post card recebe as props e renderiza o Titulo e nome do Autor
// Link da rota do PostsComments declarada
export const PostCard = ({ cover, title, name, id }) => {
  return (
    <Link to={`/postscomments/${id}`}>
      <Post>
        <img src={cover} />
        <PostContent>
          <h2>{title.toUpperCase()}</h2>
          <h3>Autor: {name.toUpperCase()}</h3>
        </PostContent>
      </Post>
    </Link>
  );
};
