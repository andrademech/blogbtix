import { PostCard } from '../PostCard';

import { PostsStyle } from './styles';

// Usando map() para extrair a capa do Post (cover), Titulo e nome do Autor
// Props enviadas para o componente PostCard
export const Posts = ({ users }) => {
  return (
    <PostsStyle>
      {users.map((user) => (
        <PostCard
          key={user.id}
          cover={user.cover}
          title={user.title}
          name={user.name}
          id={user.id}
        />
      ))}
    </PostsStyle>
  );
};
