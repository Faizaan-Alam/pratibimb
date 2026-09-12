import Archive from "../components/Archive";
import { usePageTitle } from "../hooks/usePageTitle";

export default function ArchivePage() {
  usePageTitle("Archive");

  return <Archive showLink={false} />;
}
