import { PostCard } from '../PostCard';

import { PostsStyle } from './styles';

export const Posts = ({ users }) => {
  return (
    <PostsStyle>
      {users.map((user) => (
        <PostCard
          key={user.id}
          cover={user.cover}
          title={user.title}
          name={user.name}
        />
      ))}
    </PostsStyle>
  );
};
