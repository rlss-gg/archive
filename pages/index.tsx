import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/items/avatars";
  }, []);

  return <main></main>;
}
