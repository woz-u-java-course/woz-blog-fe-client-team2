import React, {Component} from 'react';
import Layout, {siteTitle} from "../components/layout";
import Head from "next";
import Link from "next";

//this is home page
const Index = () => {
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

                <p>This section will display Article cards with routes to [id].</p>
                <h2>Articles</h2>
                <ul>
                    {articles.map(({id, title}) => (
                        <li key={id}>
                            <Link href="./articles/[id]" as={`/articles/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br/>
                            <small>

                            </small>
                        </li>
                    ))}
                </ul>

            </section>

        </Layout>
    )
}

export default Index;
