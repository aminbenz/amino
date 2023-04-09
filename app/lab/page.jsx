"use client";
import React, { useState } from "react";
import {
  AuthRequiredError,
  BadRequestError,
  PermissionDeniedError,
  DatabaseError,
} from "@/lib/exceptions";
import { notFound, useRouter } from "next/navigation";
import Link from "next/link";

import styles from "./Lab.module.css";

export default function Lab() {
  const [state, setState] = useState("");

  if (state) {
    if (state === "AuthRequiredError") {
      throw new AuthRequiredError();
    }

    if (state === "BadRequestError") {
      throw new BadRequestError();
    }

    if (state === "PermissionDeniedError") {
      throw new PermissionDeniedError();
    }

    if (state === "DatabaseError") {
      throw new DatabaseError();
    }
  }

  const handle = (e) => {
    const v = e.target.innerHTML;
    setState(v);
  };

  const router = useRouter();

  const handleNavigateToPage = (page) => {
    router.push(page);
  };

  const renderTestErrorButton = (error) => {
    return (
      <button
        className={styles.errorButton}
        onClick={() => handleTestError(error)}
      >
        Test {error} Error
      </button>
    );
  };

  const renderPageLink = (page, title) => {
    return (
      <li>
        <Link href={page}>{title}</Link>
      </li>
    );
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Lab</h1>
      <p className={styles.description}>
        This lab contains all component examples for testing and showcase.
      </p>
      <div className={styles.routesSection}>
        <h2 className={styles.subheading}>All App Routes</h2>
        <ul className={styles.routesList}>
          <li>
            <span className={styles.subheading}>Routes</span>
            <ul>
              {renderPageLink("/", "Home")}
              {renderPageLink("/welcome", "Welcome")}
              {renderPageLink("/docs", "Documentation")}
              {renderPageLink("/search?q=elon", "Search page")}
              {renderPageLink("/lab/non-existent-page", "Not Found")}
            </ul>
          </li>
          <li>
            <span className={styles.subheading}>User Routes</span>
            <ul className={styles.subRoutesList}>
              {renderPageLink("/users", "Users")}
              {renderPageLink("/users/64330a6c4e69ba207cf63a11", "User page")}
              {renderPageLink("/users/add", "Add User")}
            </ul>
          </li>
          <li>
            <span className={styles.subheading}>Auth Routes</span>
            <ul className={styles.subRoutesList}>
              {renderPageLink("/auth/register", "Register")}
              {renderPageLink("/auth/login", "Login")}
            </ul>
          </li>
          <li>
            <span className={styles.subheading}>Marketing Routes</span>
            <ul className={styles.subRoutesList}>
              {renderPageLink("/about", "About")}
              {renderPageLink("/blog", "Blog")}
              {renderPageLink("/contact", "Contact")}
            </ul>
          </li>
          <li>
            <span className={styles.subheading}>Dashboard Routes</span>
            <ul className={styles.subRoutesList}>
              {renderPageLink("/dashboard", "Dashboard")}
              {renderPageLink("/dashboard/analytics", "Analytics")}
              {renderPageLink("/dashboard/settings", "Settings")}
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.errorsSection}>
        <h2 className={styles.subheading}>Test Errors</h2>
        <ul className={styles.errorsList}>
          <li
            style={{ color: "var(--primary)" }}
            onClick={() => handleNavigateToPage("/lab/non-existent-page")}
          >
            Test Not Found Error
          </li>
          <li style={{ color: "#f71" }} onClick={handle}>
            AuthRequiredError
          </li>
          <li style={{ color: "#f71" }} onClick={handle}>
            BadRequestError
          </li>
          <li style={{ color: "#922112" }} onClick={handle}>
            PermissionDeniedError
          </li>
          <li style={{ color: "#922112" }} onClick={handle}>
            DatabaseError
          </li>
        </ul>
      </div>
    </main>
  );
}
