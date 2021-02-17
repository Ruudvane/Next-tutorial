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



            <Image
              className="img"
              src="/winter.jpg"
              alt="Dutch winter"
              width={2560}
              height={1440}
              layout="responsive"
            />


          </section>
          <section className="card">
            <h2>E-Learning markt groeit</h2>
            <p>
              Zes procent van alle Nederlanders wil binnen een jaar online
              opleiding volgen. Hiermee komt het totale aantal Nederlanders dat
              online een opleiding heeft gevolgd op 4,3 miljoen. Dit blijkt uit
              de E-Learning Monitor, een grootschalig onderzoek van Multiscope
              onder ruim 4.600 Nederlanders.
            </p>
            <p>
              Zes procent van de Nederlanders wil binnen nu en een jaar een
              online opleiding gaan volgen. Dit komt neer op ongeveer 850.000
              Nederlanders. De gemiddelde prijs per opleiding is 1290 euro. Dit
              vertegenwoordigt een potentiële marktomzet van 1,1 miljard. Van de
              toekomstige gebruikers heeft 41 procent nog niet eerder een online
              opleiding gevolgd. De meeste cursisten hebben een voorkeur voor
              het vakgebied ICT (19%), oftewel algemene computercursussen,
              informatica en diverse programmeertalen. ICT is vooral populair
              onder mannen en 18- tot 34-jarigen. Op enige afstand volgen taal
              (8%), psychologie (8%), zorg (5%) en administratie (4%).
            </p>
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
              <Image
                src="/contact.png"
                alt="Code explanation"
                width={1540}
                height={1254}
                layout={"responsive"}
              />
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
