"use client";

import { CSSProperties } from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      Psyonix has no affiliation with RLSS.GG and this site's services. We are
      run by dedicated members of the RLSS community.
    </footer>
  );
}

const styles: Record<string, CSSProperties> = {
  footer: {
    margin: "20px 10px",
    textAlign: "center",
    color: "#686B7C",
    fontSize: "1.2rem",
    fontStyle: "italic",
  },
};
