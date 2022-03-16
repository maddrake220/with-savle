import Link from "next/link";

export function MBTI({ event }) {
  return (
    <Link href="http://savle.net/MBTI/index.html">
      <a className="white" target="_blank" onClick={event}>
        저축성향 테스트
      </a>
    </Link>
  );
}
