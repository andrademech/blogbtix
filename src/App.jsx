import GlobalStyles from './styles/GlobalStyles';

import { Home } from './components/pages/Home';
import { PostsComments } from './components/pages/PostComments';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/postscomments" element={<PostsComments />} />
        <Route path="/postscomments/id" element={<PostsComments />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <GlobalStyles />
    </Router>
  );
};
