import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <style jsx>{`
        main {
          margin-top: 52px;
        }
      `}</style>
    </>
  );
}
