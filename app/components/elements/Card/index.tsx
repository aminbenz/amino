"use client";
import styles from "./card.module.css";
import { useMotionValue, useTransform, motion } from "framer-motion";
import Link from "next/link";

export default function Card({
  title,
  desc,
  as,
  href,
}: {
  title: string;
  desc: string;
  as?: string;
  href?: string;
}) {
  if (as === "link" && href) {
    return (
      <Link href={href} target="_blank">
        <div className={styles.card}>
          <h2>
            {title} <span>-&gt;</span>
          </h2>
          <p>{desc}</p>
        </div>
      </Link>
    );
  }

  return (
    <div className={styles.card}>
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{desc}</p>
    </div>
  );
}
