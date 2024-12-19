import { endpoint, avatars } from "@rlss-gg/items";
import type { Metadata } from "next";
import Image from "next/image";

import "../../app/globals.css";
import Header from "../../components/Header";

export const metadata: Metadata = {
  title: "Avatars | RLSS.GG Database",
  description: "All available avatars in Rocket League Sideswipe",
};

export default function Avatars() {
  return (
    <main>
      <Header page="Avatars" />
      <div id="container">
        {Object.values(avatars)
          .toSorted((a, b) => a.name.localeCompare(b.name))
          .map((avatar) => (
            <div
              className={`item rarity-${avatar.rarity.replaceAll(" ", "")}`}
              key={avatar.name + avatar.rarity + avatar.type}
            >
              <div className="labels">
                <span className="name-label">{avatar.name}</span>
                <span className="rarity-label">
                  {avatar.rarity} {avatar.type}
                </span>
              </div>
              <Image
                src={endpoint + avatar.thumbnail}
                alt={avatar.name}
                width={150}
                height={150}
              />
            </div>
          ))}
      </div>
    </main>
  );
}
