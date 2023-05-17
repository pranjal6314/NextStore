import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>NextStore.com</title>
        <meta
          name="description"
          content="nextstore.com - Shop Smart. Shop Next"
        />
        <link rel="icon" href="/logo2.png" />
      </Head>
      <Navbar />
      <div className="w-full h-full">
        <img src="/home.jpg" alt="home" />
      </div>
      <Footer />
    </>
  );
}
