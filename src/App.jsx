import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { EditionProvider } from "./hooks/useEditions.jsx";
import AboutPage from "./pages/AboutPage";
import ArchivePage from "./pages/ArchivePage";
import ConnectPage from "./pages/ConnectPage";
import ExplorePage from "./pages/ExplorePage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ReaderPage from "./pages/ReaderPage";
import TeamPage from "./pages/TeamPage";

export default function App() {
  return (
    <EditionProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/edition/:slug" element={<ReaderPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </EditionProvider>
  );
}
