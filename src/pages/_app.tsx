import React from "react";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-inter">
      <title>TS Next Boilerplate</title>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
