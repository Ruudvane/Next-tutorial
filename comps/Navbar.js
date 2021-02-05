import Link from 'next/link'
import link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link href="/">
                <Image src="/logoRuud.png" alt="logo" width={150} height={32}/>
                </Link>

            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninjas</a></Link>
        </nav>
    );
}

export default Navbar;