import Link from "next/link";

const Navbar = () => {
  return (


    <header>
      <div className="container">
        <Link href="/"><a className="logo">VanEldik</a></Link>



        <nav className="nav">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/ninjas">
            <a>Partners</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </div>
    </header>

  );
};

export default Navbar;
