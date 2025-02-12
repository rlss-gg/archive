"use client";

import {
  Banner,
  Decal,
  endpoint,
  ItemType,
  Item as ItemTypes,
} from "@rlss-gg/items";
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

  return (
    <div style={styles.item}>
      <div style={styles.labels}>
        <span style={styles.nameLabel}>
          {isDecal(item) ? item.body + ": " : ""}
          {item.name}
        </span>
        <span style={{ ...styles.rarityLabel, ...rarity(item.rarity) }}>
          {item.rarity} {item.type}
        </span>
      </div>
      <div style={styles.imageContainer}>
        <Image
          style={item.type === "Avatar" ? styles.image : styles.blendedImage}
          src={endpoint + item.thumbnail}
          alt={item.name}
          width={150}
          height={150}
        />
        {isBanner(item) && (
          <Image
            style={styles.image}
            src={endpoint + item.full}
            alt={item.name}
            width={150}
            height={36}
          />
        )}
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
    border: "2px solid #282B3C",
    background: "#181B2C",
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
    color: "#888B9C",
  },
  rarityLabel: {
    textAlign: "center",
    display: "block",
    fontSize: "1.2em",
  },
  imageContainer: {
    background: "radial-gradient(#00000066, #00000022)",
    width: "150px",
  },
  image: {
    display: "block",
  },
  blendedImage: {
    mixBlendMode: "lighten",
    display: "block",
  },
};

const rarity = (rarity: ItemTypes.Rarity) => {
  const colors: Record<ItemTypes.Rarity, string> = {
    Base: "#616264",
    Sport: "#3f7482",
    Special: "#276d96",
    Deluxe: "#6d3b80",
    Import: "#b23b14",
    Exotic: "#b6950f",
    Luxury: "#c16804",
    "Black Market": "#73378f",
    Premium: "#239f5a",
    Developer: "#616264",
  };

  return { color: colors[rarity] };
};
