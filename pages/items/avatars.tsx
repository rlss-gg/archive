import { avatars } from "@rlss-gg/items";
import ItemTypePage from "../../components/ItemTypePage";
import "../../app/globals.css";

export default function Avatars() {
  return <ItemTypePage label="Avatars" items={Object.values(avatars)} />;
}
