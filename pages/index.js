import Head from "next/head";
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
        <h1>Let's take a ride!</h1>
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
          <h3>Workflow</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse qui eum obcaecati alias modi totam sed, itaque, similique repellat consequuntur dolore.</p>
        </div>
        <div className="card">
          <h3>Research</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio totam aut hic voluptates. Est deleniti dolor cupiditate error? Ullam eius hic doloribus error id velit.
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
        <Image
          src="/scooter.jpg"
          alt="Scooter"
          width={800}
          height={600}
          layout={"responsive"}
        />
        <div className="card">
          <h3>Our Partners</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Link href="/ninjas">
            <a className="btn">Our Partners</a>
          </Link>
        </div>
      </div>
    </>
  );
}
