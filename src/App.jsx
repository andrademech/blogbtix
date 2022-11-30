import GlobalStyles from './styles/GlobalStyles';

import { Home } from './components/pages/Home';
import { PostsComments } from './components/pages/PostComments';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    // Usando rotas para a home e PostsComments
    <Router>
      <Routes>
        <Route path="/postscomments/:id" element={<PostsComments />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <GlobalStyles />
    </Router>
  );
};
