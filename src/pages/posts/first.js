import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Container } from "./Container";
import style from "../../styles/Home.module.css";

const first = () => {
  return (
    <Container>
      <div>
        <Head>
          <title>Adhil Muhammed</title>
        </Head>
        <h1 style={{ justifyContent: "center", display: "flex" }}>
          This is my first post
        </h1>
        <h2>
          <Link href="/">
            <span className={style?.col__highlight}>Home</span>
          </Link>
        </h2>
        <div style={{ justifyContent: "center" }}>
          <img
            style={{
              objectFit: "contain",
              width: "500px",
              height: "500px",
            }}
            src="/cat.jpg"
            alt="super_hero"
          />
        </div>
      </div>
    </Container>
  );
};

export default first;
