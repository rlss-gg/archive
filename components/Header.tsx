import { CSSProperties } from "react";

type HeaderProps = {
  page: string;
};

export default function Header(props: HeaderProps) {
  return (
    <header style={styles.header}>
      <a href="/" style={styles.a}>
        &lt;-
      </a>
      <span style={styles.span}>{props.page} | RLSS.GG Database</span>
    </header>
  );
}

const styles: Record<string, CSSProperties> = {
  header: {
    margin: "10px",
    display: "flex",
    justifyContent: "left",
    gap: "10px",
    color: "white",
  },
  a: {
    fontSize: "2em",
    fontWeight: "bold",
  },
  span: {
    fontSize: "2em",
    fontWeight: "bold",
  },
};
