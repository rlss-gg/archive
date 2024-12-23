"use client";

import { ItemType } from "@rlss-gg/items";
import Header from "./Header";
import Item from "./Item";
import { CSSProperties } from "react";
import Footer from "./Footer";
import Head from "./Head";

type ItemTypePageProps = {
  label: string;
  items: ItemType[];
};

export default function ItemTypePage(props: ItemTypePageProps) {
  props.items.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main>
      <Head title={props.label} />
      <Header page={props.label} />
      <div style={styles.container}>
        {props.items.map((item) => (
          <Item item={item} key={item.name + item.rarity + item.type} />
        ))}
      </div>
      <Footer />
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 150px)",
    gap: "10px",
    margin: "10px",
    justifyContent: "center",
  },
};
