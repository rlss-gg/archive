import { stickers } from "@rlss-gg/items";
import ItemTypePage from "../../components/ItemTypePage";
import "../../app/globals.css";

export default function Stickers() {
  return <ItemTypePage label="Stickers" items={Object.values(stickers)} />;
}
