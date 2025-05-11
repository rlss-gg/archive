import * as Items from "@rlss-gg/items";
import ItemTypePage from "../../components/ItemTypePage";
import "../../app/globals.css";

export default function Avatars() {
  return (
    <ItemTypePage
      label="New"
      items={[
        Items.avatars.UnluckyFly,
        Items.avatars.Aaawk,
        Items.avatars.AncientToken,
        Items.avatars.GrumpyFace,
        Items.avatars.FriendlyGecko,
        Items.avatars.ChillCapybara,
        Items.avatars.BunnyImpersonator,
        Items.avatars.BirdOfMay,
        Items.avatars.ILoveMom,
        Items.avatars.S21Bronze,
        Items.avatars.S21Silver,
        Items.avatars.S21Gold,
        Items.avatars.S21Platinum,
        Items.avatars.S21Diamond,
        Items.avatars.S21Champion,
        Items.avatars.S21GrandChampion,
        Items.banners.VenusFlytrap,
        Items.banners.ParrotRuins,
        Items.banners.MythicalMural,
        Items.banners.TiedyeChameleon,
        Items.banners.BugDelight,
        Items.banners.CapyAndCoco,
        Items.banners.FullOfShells,
        Items.banners.FestiveWings,
        Items.banners.MommysStrongest,
        Items.stickers.MamaMia,
        Items.titles.EggHunter,
        Items.titles.ElMariachi,
        Items.titles.MamasPride,
      ]}
    />
  );
}
