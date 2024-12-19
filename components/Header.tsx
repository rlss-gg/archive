import "./header.css";

type HeaderProps = {
  page: string;
};

export default function Header(props: HeaderProps) {
  return (
    <header>
      <a href="/">&lt;-</a>
      <span>{props.page} | RLSS.GG Database</span>
    </header>
  );
}
