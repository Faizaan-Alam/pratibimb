import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ArchivePage from "./pages/ArchivePage";
import ExplorePage from "./pages/ExplorePage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ReaderPage from "./pages/ReaderPage";
import TeamPage from "./pages/TeamPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/edition/:slug" element={<ReaderPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
