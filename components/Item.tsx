import { Banner, Decal, endpoint, ItemType, Title } from "@rlss-gg/items";
import Image from "next/image";
import "./Item.css";

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
      className={`item rarity-${item.rarity.replaceAll(" ", "")}`}
      key={item.name + item.rarity + item.type}
    >
      <div className="labels">
        <span className="name-label">
          {isDecal(item) ? item.body + ": " : ""}
          {item.name}
        </span>
        <span className="rarity-label">
          {item.rarity} {item.type}
        </span>
      </div>
      <div className="image-container">
        <Image
          src={endpoint + item.thumbnail}
          alt={item.name}
          width={150}
          height={150}
        />
      </div>
      {/* {isBanner(item) && (
        <Image
          src={endpoint + item.full}
          alt={item.name}
          width={150}
          height={150}
        />
      )} */}
    </div>
  );
}
