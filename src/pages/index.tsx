/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import Section1 from "~/components/Section1";
import Section2 from "~/components/Section2";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aviato Clone</title>
        <meta name="description" content="Made by Kairos" />
        <link rel="icon" href="https://placehold.co/100x100?text=Icon" />
      </Head>
      <main className="container mx-auto flex w-full flex-col items-center justify-center p-4">
        <Navbar />
        <Hero />
        <div className="animate-fade-up animate-duration-500 animate-delay-[2000ms] w-full">
          <Section1 />
          <Section2 />
        </div>
      </main>
      <Footer />
    </>
  );
}
