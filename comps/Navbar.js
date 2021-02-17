import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <Link href="/">
          <a>
            <h2>VanEldik</h2>
          </a>
        </Link>
        <ul>
          <Link href="/">
            <li>
              <a>Home</a>
            </li>
          </Link>
          <Link href="/ninjas">
            <li>
              <a>Partners</a>
            </li>
          </Link>
          <Link href="/about">
            <li>
              <a>About</a>
            </li>
          </Link>
          <Link href="/contact">
            <li>
              <a>Contact</a>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
