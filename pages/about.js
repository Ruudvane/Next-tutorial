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
          <div className="grid">
            <div className="card">
              <h2>About us</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed totam natus fugit repellat officia architecto tenetur corporis suscipit quaerat?</p>
            </div>
            <div className="card">
              <h2>No Cards</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident doloribus ut totam harum delectus obcaecati voluptatem quidem perspiciatis! Vel aspernatur consequatur necessitatibus obcaecati eaque consectetur placeat officiis eius voluptates veritatis corrupti.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
