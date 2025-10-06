"use client";

import styles from "./index.module.scss";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <section className={styles.content}>
          <Hero />
        </section>
      </main>
    </div>
  );
}
