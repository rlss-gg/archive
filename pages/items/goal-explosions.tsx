import { goalExplosions } from "@rlss-gg/items";
import ItemTypePage from "../../components/ItemTypePage";
import "../../app/globals.css";

export default function GoalExplosions() {
  return (
    <ItemTypePage
      label="Goal Explosions"
      items={Object.values(goalExplosions)}
    />
  );
}
