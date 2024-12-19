import { decals } from "@rlss-gg/items";
import ItemTypePage from "../../components/ItemTypePage";
import "../../app/globals.css";

export default function Decals() {
  return (
    <ItemTypePage
      label="Decals"
      items={Object.values(decals).flatMap(Object.values)}
    />
  );
}
