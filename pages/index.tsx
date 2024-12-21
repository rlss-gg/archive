import { CSSProperties } from "react";

export default function Home() {
  return (
    <main>
      <nav style={styles.nav}>
        <a href="/items/avatars">Avatars</a>
        <a href="/items/banners">Banners</a>
        <a href="/items/bodies">Bodies</a>
        <a href="/items/decals">Decals</a>
        <a href="/items/goal-explosions">Goal Explosions</a>
        <a href="/items/rocket-boosts">Rocket Boosts</a>
        <a href="/items/stickers">Stickers</a>
        <a href="/items/titles">Titles</a>
        <a href="/items/toppers">Toppers</a>
        <a href="/items/wheels">Wheels</a>
      </nav>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};
