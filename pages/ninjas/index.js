import Head from 'next/head'



export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }

}

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | Ninjas</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div >
        <h1>All Ninjas</h1>
        {ninjas.map(ninja => (
          <div className="single" key={ninja.id}>
            <a ><h3>{ninja.name}</h3></a>
            <p>email: {ninja.email}</p>
          </div>
        ))}

      </div>
    </>
  );
}

export default Ninjas;