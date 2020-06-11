import Head from 'next/head'
import Layout, {siteTitle} from "../components/layout";
import React from "react";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>

            <section>
                <h1>
                    {siteTitle}
                </h1>
            </section>
            <section>
                <p>This section will display Article cards with mapping to [id].</p>
            </section>

        </Layout>
    )
}
