import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className="antialiased text-center"
        style={{ alignContent: "center" }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}