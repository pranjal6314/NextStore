import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

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
      <div className="bg-red-300 ">hi</div>
    </>
  );
}
