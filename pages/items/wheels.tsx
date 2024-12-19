import { wheels } from "@rlss-gg/items";
import ItemTypePage from "../../components/ItemTypePage";
import "../../app/globals.css";

export default function Wheels() {
  return <ItemTypePage label="Wheels" items={Object.values(wheels)} />;
}
