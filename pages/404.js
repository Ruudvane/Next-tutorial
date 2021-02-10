import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

// redirect naar homepage
const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);
  return (
    <>
      <Head>
        <title>Ninja List | 404</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="card">
        <h1>Oops...</h1>
        <h2>That page cannot be found.</h2>
        <p>You'll be redirected to the homepage...</p>
        <p>
          Go back to the <Link href="/"><a className="btn">Homepage</a></Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
