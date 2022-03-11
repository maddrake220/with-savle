import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <style jsx>{`
        main {
          margin-top: 52px;
          overflow-y: hidden;
        }
      `}</style>
    </>
  );
}
