/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { loadPosts } from '../../utils/LoadPosts';

import {
  PostsStyle,
  Post,
  PostContent,
  Return,
  Container,
  Images,
  Author,
  IncludeComments,
  CommentsContainer,
  User,
  Reply,
  Comment,
} from './styles';

import userImage from '../../../assets/Vector.png';

export const PostsComments = () => {
  const [users, setUsers] = useState([]);

  const handleLoadPosts = async () => {
    const usersPostsPhotosAndComments = await loadPosts();

    setUsers(usersPostsPhotosAndComments);
  };

  useEffect(() => {
    handleLoadPosts();
  }, []);

  const userAuthor = users.filter((users) => users.id === 1);

  return (
    <>
      <Link to="/">
        <Return>Retornar</Return>
      </Link>
      <Container>
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
              <Author>
                <h2>Autor: {user.name} </h2>
                <h3>Email: {user.email} </h3>
                <h3>Phone: {user.phone} </h3>
                <h3>City: {user.address.city} </h3>
              </Author>
            </Post>
          ))}
        </PostsStyle>

        <IncludeComments>
          <h2>Comments</h2>
        </IncludeComments>

        <CommentsContainer>
          <User>
            <img src={userImage} alt="usuario" />
            <span>user</span>
          </User>
          <Comment>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              veritatis cum praesentium minus laboriosam corrupti numquam
              molestiae, accusamus labore. Repellat nesciunt officiis blanditiis
              sit tempore eum ipsam laborum doloribus adipisci.
            </p>
            <Reply>
              <p>Reply</p>
              <span>a min ago</span>
            </Reply>
          </Comment>
        </CommentsContainer>
      </Container>
    </>
  );
};
