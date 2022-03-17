import Link from "next/link";

export function MenuItem({ route: { path, title }, event, className }) {
  return (
    <Link href={path}>
      <a className={className} onClick={event}>
        {title}
      </a>
    </Link>
  );
}
