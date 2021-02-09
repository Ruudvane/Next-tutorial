import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Van Eldik Media | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="hero">
        <h1>Homepage</h1>
        <Image
          src="/scooter.jpg"
          alt="Scooter"
          width={800}
          height={600}
          layout={"responsive"}
        />
      </div>

      <div className="grid">
        <div className="card">
          <h3>Design</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aspernatur, odio voluptate corrupti vitae dolores accusamus.
          </p>
        </div>
        <div className="card">
          <h3>Research</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur, quaerat vero enim nisi accusamus sunt sit dignissimos,
            veritatis maiores quo cupiditate neque placeat quae at eaque
            voluptate eum, vel voluptatibus unde. Necessitatibus veniam iure
            corporis. Ipsum placeat optio alias! Asperiores esse alias
            praesentium similique natus aliquid enim sapiente vitae unde! Fugit!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos.
          </p>
        </div>
        <div className="card">
          <h3>Contact</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            soluta quia odio.
          </p>
        </div>
        <div className="card">
          <h3>Training</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            recusandae, dolorum a ratione eos sint vitae ipsum, illum tempore
            nam optio quas architecto, quidem ullam?
          </p>
        </div>
        <div className="card">
          <h3>Design</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            eligendi magnam excepturi atque assumenda? Debitis nesciunt beatae
            animi quaerat magni asperiores itaque tempore obcaecati. Magnam in
            vero eveniet facere, enim repellendus aliquam placeat
          </p>
        </div>
        <div className="card">
          <h3>Our Partners</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Link href="/ninjas">
            <a className="btn">See Ninja Listing</a>
          </Link>
        </div>
      </div>
    </>
  );
}
