import React from "react";
import styles from "./FetchLoader.module.css";

const FetchLoader = () => {
  return (
    <div>
      <div class={styles.loader}>
        <div class={styles.dot}></div>
        <div class={styles.dot}></div>
        <div class={styles.dot}></div>
        <div class={styles.dot}></div>
        <div class={styles.dot}></div>
      </div>
    </div>
  );
};

export default FetchLoader;
