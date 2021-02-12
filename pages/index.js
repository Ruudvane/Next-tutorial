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

      <main>
        <div className="container">
          <section>
            <div className="hero">
              {/* <h1>Let's take a ride!</h1> */}
              <Image
                src="/scooter.jpg"
                alt="Scooter"
                width={800}
                height={600}
                layout={"responsive"}
              />
            </div>
          </section>

          <section>
            <div className="grid">
              <div className="card">
                <h2>Workflow</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates esse qui eum obcaecati alias modi totam sed,
                  itaque, similique repellat consequuntur dolore.
                </p>
              </div>
              <div className="card">
                <h2>Research</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio totam aut hic voluptates. Est deleniti dolor cupiditate
                  error? Ullam eius hic doloribus error id velit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos.
                </p>
              </div>
              <div className="card">
                <h2>Contact</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere soluta quia odio.
                </p>
              </div>
              <div className="card">
                <h2>Training</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  recusandae, dolorum a ratione eos sint vitae ipsum, illum
                  tempore nam optio quas architecto, quidem ullam?
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
                <h2>Our Partners</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link href="/ninjas">
                  <a className="btn">Our Partners</a>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
