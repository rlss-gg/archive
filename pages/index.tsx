import { useEffect } from "react";
import Head from "../components/Head";

export default function Home() {
  useEffect(() => {
    window.location.href = "/items/avatars";
  }, []);

  return (
    <main>
      <Head />
    </main>
  );
}
