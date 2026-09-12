import About from "../components/About";
import Archive from "../components/Archive";
import Connect from "../components/Connect";
import CurrentEdition from "../components/CurrentEdition";
import EditorialMessage from "../components/EditorialMessage";
import Explore from "../components/Explore";
import Hero from "../components/Hero";
import Team from "../components/Team";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Home() {
  usePageTitle("");

  return (
    <>
      <Hero />
      <CurrentEdition />
      <About compact />
      <Archive limit={2} />
      <Team compact />
      <Explore compact />
      <Connect compact />
      <EditorialMessage />
    </>
  );
}
