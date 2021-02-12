import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <input id="nav-toggle" type="checkbox" />
          <div class="logo">VanEldik</div>
          <ul class="links">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/ninjas">
                <a>Partners</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
          <label for="nav-toggle" class="icon-burger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </label>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
