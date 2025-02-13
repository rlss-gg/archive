import * as Items from "@rlss-gg/items";
import ItemTypePage from "../../components/ItemTypePage";
import "../../app/globals.css";

export default function Avatars() {
  return (
    <ItemTypePage
      label="New"
      items={[
        Items.avatars.SunnySideUp,
        Items.avatars.ShootingStarFlag,
        Items.avatars.StarryTheAlien,
        Items.avatars.AstroDog,
        Items.avatars.AstroLover,
        Items.avatars.EquinoxStar,
        Items.avatars.SpaceTrickster,
        Items.banners.CrackedInSpace,
        Items.banners.LostAstronaut,
        Items.banners.SubZeroBeverage,
        Items.banners.AsteroidPromenade,
        Items.banners.ILoveSpace,
        Items.banners.GuardianOfStars,
        Items.banners.MartianInTheBox,
        Items.banners.S20Bronze,
        Items.banners.S20Silver,
        Items.banners.S20Gold,
        Items.banners.S20Platinum,
        Items.banners.S20Diamond,
        Items.banners.S20Champion,
        Items.banners.S20GrandChampion,
        Items.stickers.SOS,
        Items.stickers.Great,
        Items.stickers.AstroDoggo,
        Items.titles.MilkyWayfarer,
        Items.titles.ZeroGravity,
        Items.titles.LightyearsAhead,
        Items.titles.CarMeMaybe,
        Items.titles.RightOnTime,
        Items.titles.ThisIsNotATitle,
      ]}
    />
  );
}
