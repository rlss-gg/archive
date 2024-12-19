import { rocketBoosts } from "@rlss-gg/items";
import ItemTypePage from "../../components/ItemTypePage";
import "../../app/globals.css";

export default function RocketBoosts() {
  return (
    <ItemTypePage label="Rocket Boosts" items={Object.values(rocketBoosts)} />
  );
}
