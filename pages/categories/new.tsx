import * as Items from "@rlss-gg/items";
import ItemTypePage from "../../components/ItemTypePage";
import "../../app/globals.css";

export default function Avatars() {
  return (
    <ItemTypePage
      label="New"
      items={[
        Items.avatars.StingerDanger,
        Items.avatars.S22Bronze,
        Items.avatars.S22Silver,
        Items.avatars.S22Gold,
        Items.avatars.S22Platinum,
        Items.avatars.S22Diamond,
        Items.avatars.S22Champion,
        Items.avatars.S22GrandChampion,
        Items.banners.LongEaredTraveller,
        Items.stickers.SorryLagging,
      ]}
    />
  );
}
