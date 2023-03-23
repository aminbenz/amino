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
  const x = useMotionValue(300);
  const y = useMotionValue(300);

  const rotateX = useTransform(y, [0, 600], [20, -5]);
  const rotateY = useTransform(x, [0, 600], [-5, 5]);

  function handleMouse(event: any) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  if (as === "link" && href) {
    return (
      <Link href={href} target="_blank">
        <motion.div
          className={styles.card}
          onMouseMove={handleMouse}
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
          }}
        >
          <h2>
            {title} <span>-&gt;</span>
          </h2>
          <p>{desc}</p>
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div
      className={styles.card}
      onMouseMove={handleMouse}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{desc}</p>
    </motion.div>
  );
}
