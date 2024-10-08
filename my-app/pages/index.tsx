import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import TableUI from "./components/TableUI";
import Mapa from "./components/Mapa";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const titlesTable = ["ID", "Estado", "Cidade", "Cordenadas"];
const datas = [
  [1, "São Paulo", "São Paulo", 7],
  [2, "Amapá", "Macapá", 8],
  [3, "Minas Gerais", "Lavras", 11],
  [4, "Paraná", "Curitiba", 15],
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <h1>Next - Datagrid Material UI </h1>
          <TableUI titles={titlesTable} rows={datas} />
          <Mapa />
        </main>
      </div>
    </>
  );
}
