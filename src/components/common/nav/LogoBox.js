import Link from "next/link";

export function LogoBox(properties) {
  return (
    <Link href="/" passHref>
      <h1 {...properties}></h1>
    </Link>
  );
}
