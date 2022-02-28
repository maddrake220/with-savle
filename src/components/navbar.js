import Link from 'next/link';

function Navbar() {
  return (
    <nav>
      <div className="nav">
        <Link href="/">Main</Link>
        <Link href="/goal">Goal</Link>
        <Link href="/saving-calc">saving-calc</Link>
        <Link href="/vote">vote</Link>
      </div>
    </nav>
  );
}

export default Navbar;
