"use client";

import Image from "next/image";
import { CSSProperties } from "react";

type HeaderProps = {
  page: string;
};

export default function Header(props: HeaderProps) {
  const routes = {
    New: "categories/new",
    Avatars: "items/avatars",
    Banners: "items/banners",
    Bodies: "items/bodies",
    Decals: "items/decals",
    "Goal Explosions": "items/goal-explosions",
    "Rocket Boosts": "items/rocket-boosts",
    Stickers: "items/stickers",
    Titles: "items/titles",
    Toppers: "items/toppers",
    Wheels: "items/wheels",
  };

  return (
    <header style={styles.header}>
      <a href="https://rlss.gg">
        <Image
          style={styles.image}
          src="https://cdn.rlss.gg/assets/logo_nobg.png"
          alt="RLSS.GG Logo"
          height={50}
          width={50}
        />
      </a>
      <nav style={styles.nav}>
        {Object.entries(routes).map(([name, route]) => (
          <a
            style={
              props.page === name
                ? { ...styles.a, ...styles.selected }
                : styles.a
            }
            key={route}
            href={"/" + route}
          >
            {name}
          </a>
        ))}
      </nav>
    </header>
  );
}

const styles: Record<string, CSSProperties> = {
  header: {
    margin: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  image: {
    position: "relative",
    top: "2px",
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
  },
  a: {
    color: "#888B9C",
    textDecoration: "none",
    fontSize: "1.2rem",
  },
  selected: {
    color: "white",
  },
};
