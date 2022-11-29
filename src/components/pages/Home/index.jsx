import React from 'react';
import { useEffect, useState } from 'react';

import { Container } from './styles';

import { Navigation } from '../../Navigation/index';

import { loadPosts } from '../../utils/LoadPosts';
import { Posts } from '../../Posts';

export const Home = () => {
  const [users, setUsers] = useState([]);

  const handleLoadPosts = async () => {
    const usersPostsPhotosAndComments = await loadPosts();

    setUsers(usersPostsPhotosAndComments);
  };

  useEffect(() => {
    handleLoadPosts();
  }, []);

  return (
    <>
      <Navigation />
      <Container>
        <Posts users={users} />
      </Container>
    </>
  );
};
