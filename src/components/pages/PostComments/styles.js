import styled from 'styled-components';

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

export const Images = styled.div`
   img {
    width: 120px;
  }
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

export const Author = styled.div`
  justify-content: flex-start;
  width: 100%;
  margin-left: 35px;
  margin-top: 10px;
`;

export const Comments = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  width: 640px;

  > h2 {
    margin: 15px 20px;
    font-size: 1.1rem;
  }
`;

export const IncludeComments = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 640px;
  height: 50px;
`;

export const Button = styled.button`
  height: 30px;
  width: 130px;
  background-color: var(--primary);
  border-radius: 5px;
  margin-right: 5px;
  cursor: pointer;

  > span {
    color: var(--white);
  }
`;

export const InputUsername = styled.input`
  width: 130px;
  height: 30px;
  border-radius: 5px;
  margin-left: 5px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.07);

  ::placeholder {
    text-align: center;
  }
`;

export const InputComment = styled.input`
  width: 350px;
  height: 30px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.07);

  ::placeholder {
    text-align: center;
  }

`;

export const CommentsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 640px;
  background-color: rgba(0, 0, 0, 0.08);
  padding: 20px;
  border-radius: 5px;
  margin: 20px auto;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    width: 30px;
    justify-content: center;
    align-items: center;
  }

  > span {
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
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
