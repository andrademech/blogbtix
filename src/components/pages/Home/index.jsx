import React from 'react';
import { useEffect, useState } from 'react';

import { Container } from './styles';

import { Navigation } from '../../Navigation/index';

import { loadPosts } from '../../utils/LoadPosts';
import { Posts } from '../../Posts';
import { Footer } from '../../Footer';

export const Home = () => {
  // Setando carregamento da loadPosts para trazer o array unificado
  const [users, setUsers] = useState([]);
  const handleLoadPosts = async () => {
    const usersPostsPhotosAndComments = await loadPosts();

    setUsers(usersPostsPhotosAndComments);
  };

  useEffect(() => {
    handleLoadPosts();
  }, []);

  return (
    // Enviando props de users para o componente Posts
    <>
      <Navigation />
      <Container>
        <Posts users={users} />
      </Container>
      <Footer />
    </>
  );
};
