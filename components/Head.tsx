import NextHead from "next/head";

type HeadProps = {
  title: string;
};

export default function Head(props: HeadProps) {
  const title = `${props.title} | RLSS.GG Database`;
  const description =
    "A collection of (almost) every item in Rocket League Sideswipe";
  return (
    <NextHead>
      <link href="https://db.rlss.gg" rel="canonical" />
      <meta name="robots" content="index, follow" />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://cdn.rlss.gg/assets/logo_nobg.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="https://cdn.rlss.gg/assets/logo_nobg.png"
      />
    </NextHead>
  );
}
