import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>WhatsApp Clone</title>
      </Head>
      <Sidebar />
    </div>
  );
}
