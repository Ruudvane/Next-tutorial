import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Van Eldik Media | Partners</title>
        <meta name="keywords" content="ninjas" />
      </Head>

      <main>
        <div className="container">
          <h1>Our partners</h1>

          <div className="grid">
            {ninjas.map((ninja) => (
              <div className="card">
                <Link href={"ninjas/" + ninja.id} key={ninja.id}>
                  <a>
                    <h3>{ninja.company.name}</h3>
                  </a>
                </Link>
                <p>City: {ninja.address.city}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Ninjas;
