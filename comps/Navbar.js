import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <a>
            VanEldik <span>Media</span>
          </a>
        </Link>
      </div>

      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Partners</a>
      </Link>
      <Link href="/ninjas">
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default Navbar;
