import Head from "next/head";
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <>
      <Head>
        <title>
          {ninja.company.name} | {ninja.address.city}
        </title>
        <meta name="keywords" content="ninjas" />
      </Head>

      <main>
        <div className="container card">
          <h2>{ninja.company.name}</h2>

          <li>Contact Person: {ninja.name}</li>
          <li>Email: {ninja.email}</li>
          <li>Phone: {ninja.phone}</li>
          <li>
            Website: <a href="https://{ ninja.website }">{ninja.website}</a>
          </li>
          <li>City: {ninja.address.city}</li>

          <Link href="/ninjas">
            <a className="btn">back to list</a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Details;
