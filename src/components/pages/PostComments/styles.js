import styled from 'styled-components';

export const PostsStyle = styled.div`
  display: flex;
  justify-content: center;
`;

export const Post = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PostContent = styled.div`
  padding: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  > p {
    text-align: justify;
  }
`;

export const Return = styled.div`
  margin: 20px;
  max-width: 100px;
  height: 35px;
  background-color: var(--primary);
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: var(--white);
  cursor: pointer;
`;

export const Container = styled.div`
  min-width: none;
  margin: 0 auto;
  background-color: var(--white);
  padding: 20px;
  font-size: 0.5rem;
  margin-top: 15px;
`;

export const Images = styled.div`
   img {
    width: 120px;
  }
`;

export const Author = styled.div`
  justify-content: flex-start;
  width: 100%;
  margin-left: 35px;
  margin-top: 10px;
`;

export const CommentsContainer = styled.div`
  margin-left: 35px;
  display: flex;
  justify-content: center;
  width: 480px;
  background-color: rgba(0, 0, 0, 0.08);
  padding: 10px;
  border-radius: 5px;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    width: 35px;
  }
`;

export const Comment = styled.div`
  margin: 10px;
`;

export const Reply = styled.div`
  display: flex;
  > span {
    margin-left: 10px;
    color: blueviolet;
  }
`;

export const IncludeComments = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px 35px 10px 35px;
`;
