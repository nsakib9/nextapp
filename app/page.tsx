// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <>
      Hello!
      <Link href="/pages/frontend">Dashboard</Link>
      <br />
      <Link href="/pages/frontend/blog">Blog</Link>
    </>
  );
}
