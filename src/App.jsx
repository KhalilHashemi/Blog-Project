import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import AuthorPage from "./pages/AuthorPage";
import PageNotFound from "./pages/404";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
