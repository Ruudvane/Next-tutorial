import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>

      <main>
        <div className="container">
          <h1>About</h1>
          <p>
            We are a software company and we love to make fast web-apps and huge
            websites.
          </p>
        </div>
      </main>
    </>
  );
};

export default About;
