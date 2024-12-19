import { titles } from "@rlss-gg/items";
import ItemTypePage from "../../components/ItemTypePage";
import "../../app/globals.css";

export default function Titles() {
  return (
    <ItemTypePage
      label="Titles"
      items={Object.values(titles).filter((v) => typeof v !== "function")}
    />
  );
}
