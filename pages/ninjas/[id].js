import Head from 'next/head'


export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { ninja: data }
    }

}

const Details = ({ ninja }) => {
    return (
        <>
            <Head>
                <title>{ninja.company.name} | {ninja.address.city}</title>
                <meta name="keywords" content="ninjas" />
            </Head>


            <div className="card">
                <h2>{ninja.company.name}</h2>
                <p>Contact Person: {ninja.name}</p>
                <p>Email: {ninja.email}</p>
                <p>Phone: {ninja.phone}</p>
                <p>Website:  <a href="https://{ ninja.website }">{ninja.website}</a></p>
                <p>City: {ninja.address.city}</p>



            </div>
        </>
    );
}

export default Details;