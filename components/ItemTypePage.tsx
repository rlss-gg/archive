import { ItemType } from "@rlss-gg/items";
import type { Metadata } from "next";
import Header from "./Header";
import Item from "./Item";
import "./ItemTypePage.css";

type ItemTypePageProps = {
  label: string;
  items: ItemType[];
};

export default function ItemTypePage(props: ItemTypePageProps) {
  return (
    <main>
      <Header page={props.label} />
      <div id="container">
        {props.items
          .toSorted((a, b) => a.name.localeCompare(b.name))
          .map((item) => (
            <Item item={item} />
          ))}
      </div>
    </main>
  );
}

export function Metadata(label: string): Metadata {
  return {
    title: `${label} | RLSS.GG Database`,
    description: `All available ${label.toLowerCase()} in Rocket League Sideswipe`,
  };
}
