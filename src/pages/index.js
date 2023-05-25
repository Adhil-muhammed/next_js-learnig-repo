import "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default () => {
  return (
    <div>
      <Head>
        <title>Welcome to Next js </title>
      </Head>
      <h1 className="homePage-main">Welcome to Next.js!</h1>
      <div>
        <Link href={"/posts/first"}>
          <h2>First Post</h2>
        </Link>
      </div>
    </div>
  );
};
