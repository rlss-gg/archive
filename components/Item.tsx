import { Banner, Decal, endpoint, ItemType, Title } from "@rlss-gg/items";
import Image from "next/image";
import { CSSProperties } from "react";

type ItemProps = {
  item: ItemType;
};

export default function Item({ item }: ItemProps) {
  function isBanner(item: ItemType): item is Banner {
    return item.type === "Banner";
  }

  function isDecal(item: ItemType): item is Decal {
    return item.type === "Decal";
  }

  function isTitle(item: ItemType): item is Title {
    return item.type === "Title";
  }

  return (
    <div
      style={Object.assign(styles.item, rarity(item.rarity as Rarity))}
      key={item.name + item.rarity + item.type}
    >
      <div style={styles.labels}>
        <span style={styles.nameLabel}>
          {isDecal(item) ? item.body + ": " : ""}
          {item.name}
        </span>
        <span style={styles.rarityLabel}>
          {item.rarity} {item.type}
        </span>
      </div>
      <div style={styles.imageContainer}>
        <Image
          style={styles.image}
          src={endpoint + item.thumbnail}
          alt={item.name}
          width={150}
          height={150}
        />
        {/* {isBanner(item) && (
          <Image
            style={styles.image}
            src={endpoint + item.full}
            alt={item.name}
            width={150}
            height={150}
          />
        )} */}
      </div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "10px",
    overflow: "hidden",
  },
  labels: {
    padding: "10px",
  },
  nameLabel: {
    fontSize: "1.5em",
    textAlign: "center",
    display: "block",
    fontWeight: "bold",
  },
  rarityLabel: {
    textAlign: "center",
    display: "block",
    fontSize: "1.2em",
  },
  imageContainer: {
    background: "radial-gradient(#000000ff, #00000066)",
    height: "150px",
    width: "150px",
  },
  image: {
    mixBlendMode: "lighten",
  },
};

type Rarity =
  | "Base"
  | "Sport"
  | "Special"
  | "Deluxe"
  | "Import"
  | "Exotic"
  | "Luxury"
  | "Black Market"
  | "Premium";

const rarity = (rarity: Rarity) => {
  const colors: Record<Rarity, string> = {
    Base: "#616264",
    Sport: "#3f7482",
    Special: "#276d96",
    Deluxe: "#6d3b80",
    Import: "#b23b14",
    Exotic: "#b6950f",
    Luxury: "#c16804",
    "Black Market": "#73378f",
    Premium: "#239f5a",
  };

  return { background: colors[rarity] };
};
