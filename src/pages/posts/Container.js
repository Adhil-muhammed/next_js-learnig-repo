import React from "react";
import style from "../../styles/Home.module.css";

export const Container = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>;
};
