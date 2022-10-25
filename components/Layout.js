import Navbar from "./Navbar";

import React from "react";
import Footer from "./Footer";

import Head from "next/head";
import { useRouter } from "next/router";

export default function Layout({ children, ...customMeta }) {
    const router = useRouter();
    const meta = {
        title: "Kylie Adams",
        ...customMeta,
    };
    return (
        <div className="flex flex-col justify-between w-screen bg-lime-50 min-h-screen">
            <Head>
                <title>{meta.title}</title>
                <meta
                    property="og:url"
                    content={`https://KylieAdams.com${router.asPath}`}
                />
                <link
                    rel="canonical"
                    href={`https://KylieAdams.com${router.asPath}`}
                />
                <meta property="og:site_name" content="Kylie Adams" />
            </Head>

            <Navbar />
            <main className=" w-full">
                <div>{children}</div>
            </main>
            <Footer />
        </div>
    );
}
