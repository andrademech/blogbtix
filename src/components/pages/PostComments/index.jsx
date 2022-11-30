import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { loadPosts } from '../../utils/LoadPosts';
import { Footer } from '../../Footer/index';

import {
  PostsStyle,
  Post,
  PostContent,
  Return,
  Container,
  Images,
  Author,
  Comments,
  CommentsContainer,
  User,
  Reply,
  Comment,
  IncludeComments,
  InputUsername,
  InputComment,
  Button,
} from './styles';

import userImage from '../../../assets/Vector.png';

export const PostsComments = () => {
  // Setando carregamento da loadPosts para trazer o array unificado

  const [users, setUsers] = useState([]);

  const handleLoadPosts = async () => {
    const usersPostsPhotosAndComments = await loadPosts();

    setUsers(usersPostsPhotosAndComments);
  };

  useEffect(() => {
    handleLoadPosts();
  }, []);
  // Setando com useParams() o id do autor, configurado nas rotas, em App.jsx
  const params = useParams();
  const { id } = params;

  // Filtrando o autor pelo id específico para renderizar na página
  const userAuthor = users.filter((user) => user.id == id);

  return (
    <>
      <Link to="/">
        <Return>Retornar</Return>
      </Link>
      <Container>
        {/* Mapeando Imagem e Título pela API */}

        <PostsStyle>
          {userAuthor.map((user) => (
            <Post key={user.id}>
              <Images>
                <img src={user.cover} />
                <img src={user.cover} />
                <img src={user.cover} />
              </Images>
              <PostContent>
                <h1>{user.title.toUpperCase()}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  sapiente sint veniam, illo, nobis nihil libero quo ipsa minus
                  corporis perspiciatis neque explicabo magnam cumque repellat
                  incidunt iste voluptates distinctio. Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Architecto ipsum esse
                  cumque illum nobis minima autem eius eos eaque. Minus
                  provident excepturi quidem quaerat fuga obcaecati illum
                  veritatis aperiam necessitatibus. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. In sint ipsam voluptatum,
                  perspiciatis facilis pariatur, temporibus accusantium maxime
                  fugit nulla voluptate deleniti, nisi blanditiis rem quis amet
                  vitae provident officiis? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Illum sapiente sint veniam,
                  illo, nobis nihil libero quo ipsa minus corporis perspiciatis
                  neque explicabo magnam cumque repellat incidunt iste
                  voluptates distinctio. Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Architecto ipsum esse cumque illum nobis
                  minima autem eius eos eaque. Minus provident excepturi quidem
                  quaerat fuga obcaecati illum veritatis aperiam necessitatibus.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  sint ipsam voluptatum, perspiciatis facilis pariatur,
                  temporibus accusantium maxime fugit nulla voluptate deleniti,
                  nisi blanditiis rem quis amet vitae provident officiis? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Illum
                  sapiente sint veniam, illo, nobis nihil libero quo ipsa minus
                  corporis perspiciatis neque explicabo magnam cumque repellat
                  incidunt iste voluptates distinctio. Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Architecto ipsum esse
                  cumque illum nobis minima autem eius eos eaque. Minus
                  provident excepturi quidem quaerat fuga obcaecati illum
                  veritatis aperiam necessitatibus. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. In sint ipsam voluptatum,
                  perspiciatis facilis pariatur, temporibus accusantium maxime
                  fugit nulla voluptate deleniti, nisi blanditiis rem quis amet
                  vitae provident officiis? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Illum sapiente sint veniam,
                  illo, nobis nihil libero quo ipsa minus corporis perspiciatis
                  neque explicabo magnam cumque repellat incidunt iste
                  voluptates distinctio. Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Architecto ipsum esse cumque illum nobis
                  minima autem eius eos eaque. Minus provident excepturi quidem
                  quaerat fuga obcaecati illum veritatis aperiam necessitatibus.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  sint ipsam voluptatum, perspiciatis facilis pariatur,
                  temporibus accusantium maxime fugit nulla voluptate deleniti,
                  nisi blanditiis rem quis amet vitae provident officiis? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Illum
                  sapiente sint veniam, illo, nobis nihil libero quo ipsa minus
                  corporis perspiciatis neque explicabo magnam cumque repellat
                  incidunt iste voluptates distinctio. Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Architecto ipsum esse
                  cumque illum nobis minima autem eius eos eaque. Minus
                  provident excepturi quidem quaerat fuga obcaecati illum
                  veritatis aperiam necessitatibus. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. In sint ipsam voluptatum,
                  perspiciatis facilis pariatur, temporibus accusantium maxime
                  fugit nulla voluptate deleniti, nisi blanditiis rem quis amet
                  vitae provident officiis? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Illum sapiente sint veniam,
                  illo, nobis nihil libero quo ipsa minus corporis perspiciatis
                  neque explicabo magnam cumque repellat incidunt iste
                  voluptates distinctio. Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Architecto ipsum esse cumque illum nobis
                  minima autem eius eos eaque. Minus provident excepturi quidem
                  quaerat fuga obcaecati illum veritatis aperiam necessitatibus.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  sint ipsam voluptatum, perspiciatis facilis pariatur,
                  temporibus accusantium maxime fugit nulla voluptate deleniti,
                  nisi blanditiis rem quis amet vitae provident officiis? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Illum
                  sapiente sint veniam, illo, nobis nihil libero quo ipsa minus
                  corporis perspiciatis neque explicabo magnam cumque repellat
                  incidunt iste voluptates distinctio. Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Architecto ipsum esse
                  cumque illum nobis minima autem eius eos eaque. Minus
                  provident excepturi quidem quaerat fuga obcaecati illum
                  veritatis aperiam necessitatibus. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. In sint ipsam voluptatum,
                  perspiciatis facilis pariatur, temporibus accusantium maxime
                  fugit nulla voluptate deleniti, nisi blanditiis rem quis amet
                  vitae provident officiis? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Illum sapiente sint
                </p>
              </PostContent>

              {/* Listando detalhes do autor pela API */}

              <Author>
                <h2>Autor: {user.name} </h2>
                <h3>Email: {user.email} </h3>
                <h3>Phone: {user.phone} </h3>
                <h3>City: {user.address.city} </h3>
              </Author>
            </Post>
          ))}
        </PostsStyle>

        <Comments>
          <h2>Comments</h2>
        </Comments>

        <IncludeComments>
          <InputUsername placeholder="Username..." />
          <InputComment placeholder="Your Comment..." />
          <Button placeholder="Comment">
            <span>Comment</span>
          </Button>
        </IncludeComments>

        {/* Mapeando comentário pela API */}

        <>
          {userAuthor.map((user) => (
            <CommentsContainer key={user.id}>
              <User>
                <img src={userImage} alt="usuario" />

                <span>{user.name}</span>
              </User>
              <Comment>
                <p>{user.bodyComments}</p>
                <Reply>
                  <p>Reply</p>
                  <span>a min ago</span>
                </Reply>
              </Comment>
            </CommentsContainer>
          ))}
        </>

        <>
          {userAuthor.map((user) => (
            <CommentsContainer key={user.id}>
              <User>
                <img src={userImage} alt="usuario" />

                <span>{user.name}</span>
              </User>
              <Comment>
                <p>{user.bodyComments}</p>
                <Reply>
                  <p>Reply</p>
                  <span>a min ago</span>
                </Reply>
              </Comment>
            </CommentsContainer>
          ))}
        </>

        <>
          {userAuthor.map((user) => (
            <CommentsContainer key={user.id}>
              <User>
                <img src={userImage} alt="usuario" />

                <span>{user.name}</span>
              </User>
              <Comment>
                <p>{user.bodyComments}</p>
                <Reply>
                  <p>Reply</p>
                  <span>a min ago</span>
                </Reply>
              </Comment>
            </CommentsContainer>
          ))}
        </>
      </Container>
      <Footer />
    </>
  );
};
