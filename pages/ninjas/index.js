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
      <div>
        <h1>All Ninjas</h1>

        <div className="grid">
          {ninjas.map((ninja) => (
            <div className="card">
              <Link href={"ninjas/" + ninja.id} key={ninja.id}>
                <a>
                  <h3>{ninja.company.name}</h3>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ninjas;
