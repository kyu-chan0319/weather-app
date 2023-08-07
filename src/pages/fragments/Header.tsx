import Link from "next/link";
import { memo } from "react";

export default memo(function Header() {
  return (
    <div>
      <div>
        <Link href="/forecast/csr">CSR</Link>
      </div>
      <div>
        <Link href="/forecast/csr-tanstack">CSR TANSTACK</Link>
      </div>
      <div>
        <Link href="/forecast/ssr">SSR</Link>
      </div>
      <div>
        <Link href="/forecast/ssg">SSG</Link>
      </div>
    </div>
  );
});
