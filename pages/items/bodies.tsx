import { bodies } from "@rlss-gg/items";
import ItemTypePage from "../../components/ItemTypePage";
import "../../app/globals.css";

export default function Bodies() {
  return <ItemTypePage label="Bodies" items={Object.values(bodies)} />;
}
