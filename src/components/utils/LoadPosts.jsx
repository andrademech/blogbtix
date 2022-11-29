export const loadPosts = async () => {
  const usersResponse = fetch('https://jsonplaceholder.typicode.com/users');
  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
  const commentsResponse = fetch(
    'https://jsonplaceholder.typicode.com/comments',
  );

  const [users, posts, photos, comments] = await Promise.all([
    usersResponse,
    postsResponse,
    photosResponse,
    commentsResponse,
  ]);

  const usersJson = await users.json();
  const postsJson = await posts.json();
  const photosJson = await photos.json();
  const commentsJson = await comments.json();

  const usersPostsPhotosAndComments = usersJson.map((user, index) => {
    return {
      ...user,
      title: postsJson[index].title,
      body: postsJson[index].body,
      cover: photosJson[index].url,
      bodyComments: commentsJson[index].body,
    };
  });

  return usersPostsPhotosAndComments;
};
