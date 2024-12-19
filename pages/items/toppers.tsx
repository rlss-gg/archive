import { toppers } from "@rlss-gg/items";
import ItemTypePage from "../../components/ItemTypePage";
import "../../app/globals.css";

export default function Toppers() {
  return <ItemTypePage label="Toppers" items={Object.values(toppers)} />;
}
