import { banners } from "@rlss-gg/items";
import ItemTypePage from "../../components/ItemTypePage";
import "../../app/globals.css";

export default function Banners() {
  return <ItemTypePage label="Banners" items={Object.values(banners)} />;
}
