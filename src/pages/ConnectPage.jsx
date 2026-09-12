import Connect from "../components/Connect";
import { usePageTitle } from "../hooks/usePageTitle";

export default function ConnectPage() {
  usePageTitle("Connect");

  return <Connect />;
}
