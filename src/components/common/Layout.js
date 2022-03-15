import styles from "@/styles/layout/Layout.module.scss";

import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
}
