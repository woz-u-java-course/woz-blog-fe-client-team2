import Head from 'next/head'
import Layout, {siteTitle} from "../components/layout";
import React from "react";

 // this is the home page: "/"
const Home = () => {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section>
                <h1>
                    {siteTitle}
                </h1>
            </section>
            <section>
                <p>This section will display Article titles with snippets and links to each [id]</p>
            </section>

        </Layout>
    )
}

export default Home;
